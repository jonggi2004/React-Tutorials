import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Main from './components/containers/Main'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Home /> */}
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
