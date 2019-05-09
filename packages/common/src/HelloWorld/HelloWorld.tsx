import React from 'react';

import { HelloWorldProps } from './HelloWorld.props';
import './HelloWorld.scss';

export const HelloWorld: React.FC<HelloWorldProps> = ({
    heading
}): JSX.Element => {
    return (
        <div className="hello-world">
            <h1>{heading ? heading : 'no heading set'}</h1>
            <p>Created HelloWorld</p>
        </div>
    );
};
