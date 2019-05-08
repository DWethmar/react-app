# React App

[![travis](https://api.travis-ci.com/DWethmar/react-app.svg?branch=master)](https://travis-ci.com/DWethmar/react-app)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](https://storybook.js.org/)

Things you need to change if your are copying this project:

-   in the `package.json` file change the name.
-   remove `./packages/common`
-   remove `./src/example`

Some opinionated choices:

-   [monorepo](https://lerna.js.org/).
-   Typescript. (js for tools/scripts is ok)
-   No [default exports in ts/js files](https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html).
-   Sass for styling.
-   Lint with eslint.
-   React
    -   Only function components with hooks.
    -   Re-usable components are node packages (managed with lerna).
-   Use [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) in vscode.
-   [4 spaces](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md) instead of tabs. (also see: `.editorconfig`)
-   Avoid `index.ts` or `index.js` files.

## Quick start

-   Link local packages together and install remaining package dependencies:
    -   Run `npx lerna bootstrap`
-   Lint with: `npm run lint`
-   Create new components with: `npx plop`
-   Test with `npm test`
-   create new apps with: `cd src` and `npx create-react-app example --typescript`.

# NPM scripts explained

`"postinstall": "lerna bootstrap",`

After an install, setup lerna packages.

`"storybook": "start-storybook -p 6006",`

Run the storybook server.

`"build-storybook": "build-storybook",`

Build storybook stuff

`"test": "cross-env CI=true lerna run test --stream",`

Run `npm test` in all the packages with the [env CI=true](https://facebook.github.io/create-react-app/docs/running-tests#continuous-integration)

`"lint": "eslint packages"`
Lint packages //@TODO fix this.

## Continues integration (TODO)

-   Travis, see: ./travis.yaml

## TODO

-   Server side rendering (SSR).``
