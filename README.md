# Introduction React
# Autheur : Pouget Elie

## Instalation 

Il faut d'abord installer npm avec la commande :

    npm install

Installation des icons Font Awesome : 

    npm install @fortawesome/fontawesome-svg-core \ 
    @fortawesome/free-solid-svg-icons \ 
    @fortawesome/react-fontawesome


### Configuration :

Ajout de la configuration des règles de EsLint :

    npx eslint --init

_« How would you like to use ESLint? » : « To check syntax, find problems, and enforce code style »,_

_« What type of modules does your project use? » : « JavaScript modules (import/export) »,_

_« Which framework does your project use? » : « React »,_

_« Does your project use TypeScript? » : « No »,_

_« Where does your code run? » : « Browser »,_

_« How would you like to define a style for your project? » : « Use a popular style guide »,_

_« Which style guide do you want to follow? » : « Airbnb: https://github.com/airbnb/javascript »,_

_« What format do you want your config file to be in? » : « JavaScript »,_

_« Would you like to install them now with npm? » : « Yes »,_

Ajout des modules de Prettier :

    npm install --save-dev eslint-config-prettier eslint-plugin-prettier prettier

## Résolution bug PropTypes

    npx npm-check-updates --upgrade
    rm -rf node_modules package-lock.json
    npm install

## Commandes

Doc : **https://vitejs.dev/guide/#command-line-interface**
