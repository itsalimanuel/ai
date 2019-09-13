import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  './scripts/jquery.imgareaselect.pack';
import './scripts/jquery.imgareaselecter.pack';

// import $ from 'jquery';

import arrImageScript from './scripts/arrImageScript';
import Script from './scripts/script';

import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
