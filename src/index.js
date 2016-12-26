import React from 'react';
import { render } from 'react-dom';

import './index.css';
import { Router, Route, hashHistory } from 'react-router'
import List from './modules/List'
import App from './modules/App'
import ButtonExample from './modules/ButtonExample'
import SliderNum from './modules/SliderNum'
import PopItem from './modules/popitem'
import TodoBox from './modules/todobox'
import ZoomLevel from './modules/ZoomLevel'
import Demo from './modules/RumbleCharts'
import NavigationControl from './modules/navigationcontrol'
import Autobind from './modules/Autobind'


render((
  <Router history={hashHistory}>
    <Route path="/" component={List}/>
    <Route path="/app" component={App}/>
    <Route path="/buttonexample" component={ButtonExample}/>
    <Route path="/slidernum" component={SliderNum}/>
    <Route path="/popitem" component={PopItem}/>
    <Route path="/todobox" component={TodoBox}/>
    <Route path="/zoomlevel" component={ZoomLevel}/>
    <Route path="/rumble" component={Demo}/>
    <Route path="/navigationcontrol" component={NavigationControl}/>
    <Route path="/autobind" component={Autobind}/>
  </Router>
), document.getElementById('root'))
