TATY & Associés — fichiers de remplacement
Repository : kyayoun-sudo/taty-website
Base : 65f224ac120d64030eba18e25ebba40ab93f97a6

CONTENU
Ce ZIP contient 11 fichiers de remplacement et ce README.
Les dossiers correspondent exactement aux chemins du repository.
Les crochets dans [locale] et [slug] font partie du nom des dossiers :
ne les remplacez pas par fr, en ou un nom de service.

CHEMINS EXACTS À REMPLACER
config/site.ts
content/team.ts
content/firm.ts
content/careers.ts
dictionaries/fr.json
dictionaries/en.json
components/ui/StatusBadge.tsx
app/[locale]/page.tsx
app/[locale]/secteurs/page.tsx
app/[locale]/services/[slug]/page.tsx
app/[locale]/international/page.tsx

INSTALLATION
1. Décompressez taty-site-update-ready.zip sur votre ordinateur.
2. Ouvrez le dossier de votre projet taty-website.
3. Copiez les dossiers app, components, config, content et dictionaries
   extraits dans la racine du projet. Acceptez le remplacement des fichiers.
4. Conservez tous les autres fichiers du projet.
5. Envoyez les changements sur GitHub puis créez le commit.
   Avec l'interface GitHub, ouvrez le dépôt, choisissez Add file > Upload files,
   puis glissez les cinq dossiers extraits en conservant leur arborescence.
   Vérifiez les 11 chemins ci-dessus avant de valider le commit.
6. Si Vercel est connecté au dépôt et à cette branche, le déploiement
   se déclenchera selon sa configuration habituelle.

Ne téléversez pas le ZIP lui-même comme fichier du site.
Le README sert uniquement de guide et n'a pas besoin d'être téléversé.
Ne copiez pas les fichiers à la racine en supprimant leurs dossiers.

MODIFICATIONS
- Profil de Paul Yann Cédric Komenan : ACCA Member (Chartered Certified
  Accountant), en français et en anglais.
- Accroche : Des chiffres fiables. Des décisions éclairées. Une confiance durable.
- Signature : Rigueur. Indépendance. Confiance.
- Textes professionnels FR/EN pour les introductions, mission, vision,
  valeurs et parcours de candidature ; retrait des badges de statut visibles.
- Services, secteurs, profils et fonctionnalités existants conservés.
- Les brouillons de publications et les notices juridiques restent inchangés.

PROVENANCE ET VÉRIFICATION
Reconstitution à partir du dépôt et des modifications décrites dans la
conversation Modifier le site Tatila ; l'ancien ZIP n'était pas accessible.
Les chemins et le contenu de l'archive ont été contrôlés.
La compilation complète du site n'a pas été exécutée dans cet environnement.
