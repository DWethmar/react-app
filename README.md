# React App

[![travis](https://api.travis-ci.com/DWethmar/react-app.svg?branch=master)](https://travis-ci.com/DWethmar/react-app)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](https://storybook.js.org/)
[![sonarcloud](https://sonarcloud.io/api/project_badges/measure?project=DWethmar_react-app&metric=alert_status)](https://sonarcloud.io/dashboard?id=DWethmar_react-app)
[![Coverage Status](https://coveralls.io/repos/github/DWethmar/react-app/badge.svg?branch=master)](https://coveralls.io/github/DWethmar/react-app?branch=master)

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
- code quality with sonarcloud.

## Quick start

- Lint with: `npm run lint`
- Create new components with: `npx plop`
- Test with `npm test`
- create new apps with: `cd src` and `npx create-react-app example --typescript`.

## Continues integration (TODO)

- Travis, see: ./travis.yaml

## TODO

- Server side rendering (SSR).``
