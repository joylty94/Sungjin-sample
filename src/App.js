import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import HomeScreen from './containers/HomeScreen';

class App extends Component {
  render() {
    return (
      <BrowserRouter>      
        <div >
        <Route path="/" exact component={HomeScreen} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
