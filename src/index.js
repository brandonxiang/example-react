import React from 'react';
import { render } from 'react-dom';

import './index.css';
import { Router, Route, hashHistory } from 'react-router'
import List from './modules/List'
import App from './modules/App'
import ButtonExample from './modules/ButtonExample'
import SliderNum from './modules/SliderNum'


render((
  <Router history={hashHistory}>
    <Route path="/" component={List}/>
    <Route path="/app" component={App}/>
    <Route path="/buttonexample" component={ButtonExample}/>
    <Route path="/slidernum" component={SliderNum}/>
  </Router>
), document.getElementById('root'))