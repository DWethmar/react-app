/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { HelloWorld } from './HelloWorld';
import { HelloWorldDummy as dummyData } from './HelloWorld.dummy';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HelloWorld {...dummyData} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
