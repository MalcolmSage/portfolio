import React from 'react';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import reactDom from 'react-dom';

import Toolbar from '@material-ui/core/Toolbar';
import { Container } from '@material-ui/core';
// import CssBaseline from '@material-ui/core/CssBaseline';

const routing = (
  <Router>
    <React.StrictMode>
      <Container maxWidth='md'>
        {/* <CssBaseline /> */}
        <Toolbar />
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Container>
      <Footer />
    </React.StrictMode>,
  </Router>
);

reactDom.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
