import React, {Component} from 'react';
import {Root, Routes} from 'react-static'
import {Route, Switch} from 'react-router-dom'; 

import './app.css';
import './tachyons.min.css';

import Landing from './pages/Landing';
import License from './pages/License';
import Docs from './pages/Docs';

const App = () => {
  return (<Root>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/license" component={License} />
      <Route exact path="/docs" component={Docs} />
      <Route render={() => <Routes />} />
    </Switch>
  </Root>)
};

export default App;
