import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Enroll from './components/Enroll/Enroll';
import Login from './components/Login/Login';
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/enroll' component={Enroll} />   
        <Route exact path='/home' component={Home} />      
      </Switch>
    </Router>
  );
}

export default App;
