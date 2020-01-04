import React, {Component} from 'react';
import {Root, Routes} from 'react-static'
import {Route} from 'react-router-dom'; 

import './app.css';
import './tachyons.min.css';
import Landing from './pages/Landing';

const App = () => {
  return (<Root>
    <Route path="/" component={Landing} />
  </Root>)
};

export default App;
