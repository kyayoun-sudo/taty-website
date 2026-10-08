import {
  readdir,
  mkdir,
  copyFile,
  writeFile,
  readFile,
} from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);

const source = path.join(root, "assets", "equipe");
const target = path.join(root, "public", "assets");
const teamFile = path.join(root, "content", "team.ts");
const manifestFile = path.join(
  root,
  "content",
  "asset-photos.json",
);

const teamSource = await readFile(teamFile, "utf8");

const memberIds = new Set(
  [...teamSource.matchAll(/\bid:\s*"([a-z0-9-]+)"/g)]
    .map((match) => match[1]),
);

await mkdir(source, { recursive: true });
await mkdir(target, { recursive: true });

const entries = (
  await readdir(source, { withFileTypes: true })
).sort((a, b) => a.name.localeCompare(b.name));

const selectedPhotos = new Map();

// Vérifier tous les noms avant de copier les fichiers.
for (const entry of entries) {
  if (
    !entry.isFile() ||
    !/\.(jpe?g|png|webp|avif)$/i.test(entry.name)
  ) {
    continue;
  }

  const id = path.parse(entry.name).name;

  if (!memberIds.has(id)) {
    throw new Error(
      `Photo inconnue : ${entry.name}. ` +
      "Le nom du fichier doit correspondre à un id de content/team.ts.",
    );
  }

  if (selectedPhotos.has(id)) {
    throw new Error(
      `Plusieurs photos pour ${id}. ` +
      "Gardez un seul fichier par personne dans assets/equipe.",
    );
  }

  selectedPhotos.set(id, entry.name);
}

const photos = {};

for (const [id, filename] of selectedPhotos) {
  const publicFilename = `${id}.jpg`;

  await copyFile(
    path.join(source, filename),
    path.join(target, publicFilename),
  );

  photos[id] = `/assets/${publicFilename}`;
}

await writeFile(
  manifestFile,
  JSON.stringify(photos, null, 2) + "\n",
  "utf8",
);

console.log(
  `${selectedPhotos.size} photo(s) d'équipe préparée(s).`,
);
