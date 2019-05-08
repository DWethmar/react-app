/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'
import { HelloWorld } from './HelloWorld'
import { HelloWorldDummy as data } from './HelloWorld.dummy'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<HelloWorld {...data} />, div)
    ReactDOM.unmountComponentAtNode(div)
})
