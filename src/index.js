import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './App';
import reactDom from 'react-dom';

const routing = (
  <Router>
    <React.StrictMode>
				<Route exact path="/" component={App} />
    </React.StrictMode>,
  </Router>
);

reactDom.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
