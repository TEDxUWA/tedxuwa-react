import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ASYNC from "./services/AsyncComponents";
import "./css/App.css";

class App extends Component {
  // changed the loader a bit 
  componentDidMount() {
    // Aggressively remove loader
    const removeLoader = () => {
      const loader = document.querySelector('.loading-placeholder');
      if (loader) {
        loader.style.pointerEvents = 'none';
        loader.style.display = 'none'; // Force hide
        if (loader.parentNode) loader.parentNode.removeChild(loader);
      }
    };

    removeLoader();
    // Retry in case it was re-added or missed
    setTimeout(removeLoader, 100);
    setTimeout(removeLoader, 1000);
    setTimeout(removeLoader, 3000);

    // Active defense against rogue iframes
    setInterval(() => {
      // 1. Target all iframes
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach(iframe => {
        const style = window.getComputedStyle(iframe);
        // Remove if it's fixed/absolute and covering a significant portion of the screen
        if ((style.position === 'fixed' || style.position === 'absolute') && 
            (parseInt(style.zIndex) > 10 || style.zIndex === 'auto')) {
            
             // Check dimensions
             const width = iframe.offsetWidth;
             const height = iframe.offsetHeight;
             const windowWidth = window.innerWidth;
             const windowHeight = window.innerHeight;

             if (width > windowWidth * 0.8 && height > windowHeight * 0.8) {
                iframe.remove();
                console.log('Rogue iframe removed');
             }
        }
      });
      
      // 2. Target any element with ridiculously high z-index that isn't our Navbar
      const allElements = document.querySelectorAll('*');
      allElements.forEach(el => {
         const style = window.getComputedStyle(el);
         const zIndex = parseInt(style.zIndex);
         if (!isNaN(zIndex) && zIndex > 2000 && !el.classList.contains('navbar-wrapper-safety')) {
             // If it's fixed and full screen
             if (style.position === 'fixed') {
                 el.style.display = 'none';
                 el.style.pointerEvents = 'none';
             }
         }
      });

    }, 1000);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="tedxuwa-app">
          <Route component={ScrollToTop} />
          <Route path="/" component={Navbar} />
          <Switch>
            <Route exact path="/sponsors" component={ASYNC.SponsorsPage} />
            <Route exact path="/contact" component={ASYNC.ContactPage} />
            <Route path="/events" component={ASYNC.EventsPage} />
            <Route exact path="/about" component={ASYNC.AboutPage} />
            <Route exact path="/speakers" component={ASYNC.SpeakersPage} />
            <Route exact path="/" component={ASYNC.LandingPage} />
            <Route path="*" component={ASYNC.NotFound} />
          </Switch>
          <Route path="/" component={Footer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
