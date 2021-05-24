import React from 'react';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './pages/home/home';
import Header from './pages/header/header';
import Footer from './pages/footer/footer';

import reactDom from 'react-dom';
import Toolbar from '@material-ui/core/Toolbar';
import { Container } from '@material-ui/core';



const routing = (
  <Router>
    <React.Fragment>
      <Container maxWidth='md' >
        <Toolbar />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Container>
    </React.Fragment>,
  </Router>
);

reactDom.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
