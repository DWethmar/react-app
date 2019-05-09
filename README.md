# React App

[![travis](https://api.travis-ci.com/DWethmar/react-app.svg?branch=master)](https://travis-ci.com/DWethmar/react-app)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](https://storybook.js.org/)

A starter project for react apps.

Things you need to change if your are copying this project:

- in the `package.json` file change the name.
- remove `./packages/common`
- remove `./apps/example`

Some opinionated choices:

- [monorepo](https://lerna.js.org/).
- Typescript. (js for tools/scripts is ok)
- No [default exports in ts/js files](https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html).
- Sass for styling.
- Lint with [eslint](https://eslint.org/) (.js,.ts,.tsx) and [stylelint](stylelint.io) (.scss).
- React
  - Only function components with hooks.
  - Re-usable components are node packages (managed with lerna).
  - Work on components within [storybook](https://storybook.js.org/).
- Auto format code with eslint.
- 4 spaces indentation.
- Re-usable code should be created with plop.

## Quick start

- Lint with: `npm run lint`
- Create new components with: `npx plop`
- Test with `npm test`
- create new apps with: `cd src` and `npx create-react-app example --typescript`.

## Continues integration (TODO)

- Travis, see: ./travis.yaml

## TODO

- Server side rendering (SSR).``
