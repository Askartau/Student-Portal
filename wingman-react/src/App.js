import React, { Component } from 'react';
import logo from './assets/img/logo-white.svg';
import Header from './components/moleculas/Header'
import Footer from './components/moleculas/Footer';
import Index from './components/organisms/Index'
import Faculty from './components/organisms/Faculty'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={Index}></Route>
          <Route path="/faculties/" component={Faculty}></Route>
          {/* <Route path="/about/" component={}></Route>
          <Route path="/profile/" component={}></Route>
          <Route path="/profile/settings/" component={}></Route> */}
          
          <Footer />
        </div>
      </Router> 
      
    );
  }
}

export default App;
