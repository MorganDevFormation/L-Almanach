# L-Almanach

Exercice sur la création d'un almanach

## le Projet

développer une application maintenable facilement

## plan

Faire une archi avec le serveur htpp Express

### Mise en oeuvre

# Sprint 0 : Création de l'appli Express

1. [] Initialiser le projet
   1. [] `git init`
   2. [] faire un .gitignore
   3. [] `npm init`
2. [] Installation de dépendances et config
   1. [] `npm i express ejs dotenv`
   2. [] changer le type en module : utiliser ESM
3. [] Créer le serveur web
   1. [] Créer le point d'entrée de l'application (index.js)
      1. [] Import d'express
      2. [] import des variables env
      3. [] mise en place des middlewares
         1. [] les statics
      4. [] import du router
      5. [] view engine
   2. [] Configuration du serveur http
   3. [] Variable d'environnement
4. [] Structurer nos dossiers du projet
   1. [] intégration
   2. [] public
      1. [] css
      2. [] img
      3. [] js
   3. [] docs/wireframes
   4. [] middlewares
   5. [] views
   6. [] routers
   7. [] controllers
   8. [] data : les données d'exemple de l'appication
5. [] Changer notre `package.json`
   1. [] faire les scripts
   2. [] `npm i -D nodemon` pour installer nodemon en dépéndance de dèv.
      1. [] script: `"dev": "nodemon index.js"`
6. [x] Création d'un routeur
7. [x] Création d'un controller

# Sprint 1 : Affichage des données

# Mise en oeuvre

- [] Accéder à la liste des promos
  - [] On veut afficher une page qui contient la liste des promos
  - [] Importer des données
  - [] On doit envoyer `promos.ejs` au client
  - [] un routeur
  - [] un controlleur
    - [] la méthode du controller

---

- [] Accéder le détail d'une promo
  - [] On veut afficher une page qui contient le détail d'une promo
  - [] Importer des données
  - [] On doit envoyer `promo.ejs` au client
  - [] une route
  - [] la méthode du controller
