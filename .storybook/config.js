import {
  configure
} from '@storybook/react';
import {
  setOptions
} from '@storybook/addon-options';
import './storybook.scss';

setOptions({
  name: `${ require('../package.json').name } Designs`
});

const packagesReq = require.context('../packages', true, /\.stories\.tsx$/);
const appsReq = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  packagesReq.keys().forEach(filename => packagesReq(filename));
  appsReq.keys().forEach(filename => appsReq(filename));
}

configure(loadStories, module);