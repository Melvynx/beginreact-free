## BeginReact Training

Ce repository te permet de faire les exercices que je t'ai préparés. Pour setup le repository et faire en sorte que tout fonctionne correctement, tu peux lancer les commandes suivantes :

```bash
## npm
npm install
npm run dev

## pnpm
pnpm install
pnpm run dev
```

J'utilise personnellement `pnpm` pour éviter de devoir télécharger constamment tous les modules. Si tu n'as pas `pnpm`, tu peux l'installer avec `npm install -g pnpm`.

- [PNPM Documentation](https://pnpm.io/)

## Problème ?

Si tu as des bugs, merci de suivre les procédures suivantes :

### 1. Utiliser la dernière version de NodeJS

J'ai personnellement la version `v20.11.1` actuellement et je t'invite à avoir une version supérieure ou égale à la mienne.

- [Télécharger NodeJS](https://nodejs.org/en/download)

Choisis toujours les versions LTS pour éviter les problèmes de compatibilité.

### 2. Problème avec le lancement d'application

Si tu as des problèmes avec le lancement de l'application, tu peux essayer de supprimer le dossier `node_modules` et de relancer la commande `npm install` ou `pnpm install`.

```bash
rm -rf node_modules
rm pnpm-lock.yaml
rm package-lock.json

## npm
npm install

## pnpm
pnpm install
```

Tu peux aussi vérifier que tu es à jour avec mon code sur GitHub.
