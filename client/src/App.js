import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Enroll from './components/Enroll/Enroll';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/enroll' component={Enroll} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
