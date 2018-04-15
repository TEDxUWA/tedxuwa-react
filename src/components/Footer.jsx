import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo_dark from "../assets/logo_dark-no_padding.svg";
import "../css/Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <Link to="/"><img src={logo_dark} alt="TEDxUWA logo" className="logo d-none d-sm-block" /></Link>
              <ul className="contact-info-group list-unstyled">
                <li>0420 613 222</li>
                <li><a href="mailto:tedxuwa@gmail.com">tedxuwa@gmail.com</a></li>
              </ul>
              <ul className="social-group list-inline list-unstyled">
                <li className="list-inline-item"><a href="https://www.facebook.com/TEDxUWA/"><i className="fab fa-facebook"></i></a></li>
                <li className="list-inline-item"><a href="https://www.youtube.com/playlist?list=PLsRNoUx8w3rO4YQeHK_c2WH6SCJqUo0vo"><i className="fab fa-youtube"></i></a></li>
                <li className="list-inline-item"><a href="https://www.flickr.com/photos/146823452@N07/"><i className="fab fa-flickr"></i></a></li>
                <li className="list-inline-item"><a href="https://twitter.com/TEDTalks"><i className="fab fa-twitter"></i></a></li>
              </ul>
            </div>
            <div className="col-md-2 ml-auto events-group">
              <h4>Events</h4>
              <ul className="list-unstyled">
                <li><Link to="/events">All events</Link></li>
                <li><Link to="/events">Attend an event</Link></li>
                <li><Link to="/speaker">Speakers</Link></li>
              </ul>
            </div>
            <div className="col-md-2 collaborate-group">
              <h4>Get Involved</h4>
              <ul className="list-unstyled">
                <li><Link to="/contact">Volunteer</Link></li>
                <li><Link to="/sponsors">Work with us</Link></li>
              </ul>
            </div>
            <div className="col-md-2 about-group">
              <h4>About us</h4>
              <ul className="list-unstyled">
                <li><Link to="/about">Our team</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
              </ul>
            </div>
          </div>
          <p className="footnote text-muted">This independent TEDx event is operated under license from TED.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;