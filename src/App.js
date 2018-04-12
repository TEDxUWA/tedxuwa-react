import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Analytics from './components/Analytics';
import ASYNC from './services/AsyncComponents';
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
            <Route path='/' component={Analytics}/>
            <Route path="/" component={Navbar}/>
            <Switch>
              <Route exact path="/sponsors" component={ASYNC.SponsorsPage}/>
              <Route exact path="/contact" component={ASYNC.ContactPage}/>
              <Route path="/events" component={ASYNC.EventsPage}/>
              <Route exact path="/about" component={ASYNC.AboutPage}/>
              <Route exact path="/" component={ASYNC.LandingPage}/>
            </Switch>
            <Route path="/" component={Footer}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
