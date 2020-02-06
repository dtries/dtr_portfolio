import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/Navbar';
import LandingPage from './components/LandingPage';
import PortfolioPage from './components/PortfolioPage';
import AboutPage from './components/AboutPage';
import './App.css';


class App extends Component  {
  render () {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={LandingPage}/>
          <Route path="/Portfolio" component={PortfolioPage}/>
          <Route path="/About" component={AboutPage}/>
        </div>
      </Router>
    );

  }
}

export default App;
