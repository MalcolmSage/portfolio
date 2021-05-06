import React from 'react';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './pages/home/App';
import Header from './pages/header/header';
import Footer from './pages/footer/footer';
import About from './pages/about/about';
import Projects from './pages/projects/App';
import Single from './pages/projects/components/single';
import Contact from './pages/contact/contact';
import reactDom from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import { Container } from '@material-ui/core';
// import CssBaseline from '@material-ui/core/CssBaseline';



const routing = (
  <Router>
    <React.Fragment>
      <Container maxWidth='md' >
        <Toolbar />
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
				  <Route path="/project/:slug" component={Single} />
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
