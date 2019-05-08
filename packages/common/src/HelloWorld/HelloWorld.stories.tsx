/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { HelloWorldDummy as data } from './HelloWorld.dummy';
import { HelloWorld } from './HelloWorld';

storiesOf('HelloWorld', module)
    .addDecorator(withKnobs)
    .add('Default', () => <HelloWorld {...data} />);
