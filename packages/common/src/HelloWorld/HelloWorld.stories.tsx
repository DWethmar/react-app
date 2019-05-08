/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { HelloWorldDummy as data } from './HelloWorld.dummy';
import { HelloWorld } from './HelloWorld';

storiesOf('HelloWorld', module).add('Default', () => <HelloWorld {...data} />);
