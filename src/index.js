
import React from 'react';
import ReactDOM from 'react-dom';

// import library's specific styles
require('./style.css');
require('./style.scss');
require('./style.less');

import {Foo} from './Foo';

export function start(targetEl) {
    ReactDOM.render(<Foo />, targetEl);
}
