# Configuración de ESLint, Husky en NestJs.

## Steps para configurar ESLint

1. Instalar dependencias `npm i eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-unused-imports  --save-dev`
2. Crear nuestro archivo de `eslint.config.mjs `(Esto por default lo crea el repo de backstage)
3. Agregar rules, plugins e imports a nuestro archivo
4. Agregar configuración de path alias a proyecto. Los archivos a modificar son `tsconfig.json` el build, y los de pruebas unitarias. Como probar

## Steps para configurar GIT Hooks

1. Instalar Husky
   `npm i husky --save-dev`
2. Inicializamos husky en nuestro proyecto con el comando `npx husky init`
3. Creamos y configuramos nuestros de archivos hooks.
4. Configuramos commitlint, para ellos necesitamos instalar las siguientes dependencias `npm i @commitlint/cli @commitlint/config-conventional --save-dev`
5. Instalar lint-staged con el siguiente comando `npm i lint-staged --save-dev`
6. Creamos y configuramos nuestro archivo `lint-staged.config.mjs`
