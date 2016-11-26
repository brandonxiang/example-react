import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>{this.props.title}</h2>
        </div>
        <p className="App-intro">
          To get {this.state.date.toLocaleTimeString()}, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
