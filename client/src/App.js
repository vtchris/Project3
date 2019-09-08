import React from 'react';
import logo from './logo.svg';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Enroll from './components/Enroll';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <switch>
        <Route exact path='/enroll' component={Enroll} />
        <Route exact path='/login' component={Login} />
      </switch>
    </Router>
  );
}

export default App;
