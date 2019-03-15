import React, { Component } from 'react';
import logo from './assets/img/logo-white.svg';
import Header from './components/moleculas/Header'
import Footer from './components/moleculas/Footer';
import Index from './components/organisms/Index'
import Faculty from './components/organisms/Faculty'
import Account from './components/organisms/Account';
import AccountSettings from './components/organisms/AccountSettings';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={Index}></Route>
          <Route path="/faculties/" component={Faculty}></Route>
          <Route path="/profile/" exact component={Account}></Route>
          <Route path="/profile/settings/" component={AccountSettings}></Route>
          
          <Footer />
        </div>
      </Router> 
      
    );
  }
}

export default App;
