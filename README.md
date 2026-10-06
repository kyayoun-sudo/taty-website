# TATY & Associés — site web

Code du site actuellement publié sur https://taty-website.vercel.app, récupéré depuis son déploiement Vercel du 25 septembre 2026. Cette copie ajoute la mise à jour des portraits depuis `assets/equipe`.

## Déposer le site sur GitHub

1. Décompressez le ZIP sur votre ordinateur.
2. Ouvrez https://github.com/kyayoun-sudo/taty-website.
3. Choisissez **Add file → Upload files**.
4. Déposez les fichiers et les dossiers extraits, puis choisissez **Commit changes** sur `main`.

Le fichier `package.json` doit être à la racine du dépôt, à côté des dossiers `app`, `assets`, `components` et `content`. Déposez les fichiers extraits, pas le ZIP ni un dossier supplémentaire contenant tout le site. Vérifiez aussi que le fichier `.gitignore` est inclus.

## Relier Vercel

Dans le projet Vercel **taty-website**, ouvrez **Settings → Git** et connectez le dépôt **kyayoun-sudo/taty-website** si ce n'est pas déjà fait. Utilisez `main` comme branche de production.

Dans **Settings → Build and Deployment**, sélectionnez **Next.js**, laissez le dossier racine vide et utilisez `npm run build` comme commande de construction. Conservez les variables d'environnement déjà utilisées par le projet.

Déclenchez le premier déploiement et vérifiez son statut **Ready**. Ensuite, chaque modification enregistrée sur `main` déclenchera un nouveau déploiement. Les photos apparaîtront une fois ce déploiement terminé.

## Mettre à jour les photos

Ouvrez le dossier **assets/equipe** sur GitHub. Ajoutez ou remplacez le portrait voulu avec le nom indiqué dans **assets/README.md**, puis choisissez **Commit changes**.

Exemple : `assets/equipe/komenan-paul-yann.jpg` pour le portrait de Paul Yann Cédric Komenan. Formats acceptés : JPG, JPEG, PNG, WebP et AVIF. Gardez une seule photo par personne.

Le script `scripts/sync-assets.mjs` copie les portraits dans les fichiers publics et met à jour leur correspondance avant chaque construction. Il ne crée pas de nouveaux membres d'équipe : les noms, fonctions et biographies restent dans `content/team.ts`.

## Développement local

Node.js 24, conformément au projet Vercel d'origine.

```sh
npm install
npm run dev
npm run build
```

Le formulaire de contact conserve le comportement de la version d'origine ; aucun nouveau service d'envoi n'a été ajouté.

## Vérifications de cette archive

Les fichiers récupérés et les deux portraits ont été contrôlés. La préparation automatique des photos a été exécutée et vérifiée, y compris l'ajout d'un nouveau portrait. La construction complète Next.js n'a pas été exécutée localement, car les dépendances ne sont pas disponibles dans le cache hors connexion : vérifiez le premier déploiement Vercel avant de considérer la migration comme terminée.
