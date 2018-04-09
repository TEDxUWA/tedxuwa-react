import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from './pages/ContactPage';
import SponsorsPage from './pages/SponsorsPage';
import './css/App.css';

class App extends Component {
  componentDidMount() {
    document.querySelector('.loading-placeholder').style.display = 'none';
  }
  render() {
    return (
      <BrowserRouter>
        <div className="tedxuwa-app">
          <Route component={ScrollToTop}/>
            <Route path="/" component={Navbar}/>
            <Switch>
              <Route exact path="/sponsors" component={SponsorsPage}/>
              <Route exact path="/contact" component={ContactPage}/>
              <Route path="/events" component={EventsPage}/>
              <Route exact path="/about" component={AboutPage}/>
              <Route exact path="/" component={LandingPage}/>
            </Switch>
            <Route path="/" component={Footer}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
