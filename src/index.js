
import React from 'react';
import ReactDOM from 'react-dom';
import {Foo} from './Foo';

require('./style.css');
require('./style.scss');
require('./style.less');

export function start(targetEl) {
    ReactDOM.render(<Foo />, targetEl);
}
