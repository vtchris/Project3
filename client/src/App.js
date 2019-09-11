import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Yourlist from "./pages/Yourlist";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import './App.css';
import Enroll from './components/Enroll/Enroll';
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Products} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/yourlist" component={Yourlist} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/enroll' component={Enroll} />   
        <Route exact path='/home' component={Home} /> 
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
