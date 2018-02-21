import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Login from './Login.js';
import Signup from './Signup.js';
import mainPage from './mainPage.js';
import OneTask from './oneTask.js';

class App extends Component {
  render() {
    return (
        <div>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/mainPage' component={mainPage} />
          <Route path='/tasks/:taskId' component={OneTask} />
	      </div>
    );
  }
}


export default App;
