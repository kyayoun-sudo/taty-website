import { readdir, mkdir, copyFile, writeFile, rm, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'assets', 'equipe');
const target = path.join(root, 'public', 'assets', 'equipe');
const photos = {};
const teamSource = await readFile(path.join(root, 'content', 'team.ts'), 'utf8');
const memberIds = new Set([...teamSource.matchAll(/\bid:\s*"([a-z0-9-]+)"/g)].map(match => match[1]));
await mkdir(source, { recursive: true });
await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
for (const entry of (await readdir(source, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name))) {
  if (!entry.isFile() || !/\.(jpe?g|png|webp|avif)$/i.test(entry.name)) continue;
  const id = path.parse(entry.name).name;
  if (!memberIds.has(id)) throw new Error(`Photo inconnue : ${entry.name}. Consultez assets/README.md pour les noms autorises.`);
  if (photos[id]) throw new Error(`Plusieurs photos pour ${id}. Gardez un seul fichier par personne.`);
  await copyFile(path.join(source, entry.name), path.join(target, entry.name));
  photos[id] = `/assets/equipe/${encodeURIComponent(entry.name)}`;
}
await writeFile(path.join(root, 'content', 'asset-photos.json'), JSON.stringify(photos, null, 2) + '\n');
console.log(`${Object.keys(photos).length} photo(s) d'equipe preparee(s).`);
