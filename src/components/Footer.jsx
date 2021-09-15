import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo_dark from "../assets/logo_dark-no_padding.svg";
import "../css/Footer.css";
import { SOCIAL_MEDIA } from "../services/Globals";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <Link to="/">
                <img
                  src={logo_dark}
                  alt="TEDxUWA logo"
                  className="logo d-none d-sm-block"
                />
              </Link>
              <ul className="contact-info-group list-unstyled">
                <li>
                  <a href="mailto:hello@tedxuwa.com">hello@tedxuwa.com</a>
                </li>
              </ul>
              <ul className="social-group list-inline list-unstyled">
                {SOCIAL_MEDIA.map(social => (
                  <li className="list-inline-item" key={social.name}>
                    <a href={social.link}>
                      <i className={`fab fa-${social.icon}`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-2 ml-auto events-group">
              <h4>Events</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/events">All events</Link>
                </li>
                <li>
                  <Link to="/events">Attend an event</Link>
                </li>
                <li>
                  <Link to="/speakers">Speakers</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 collaborate-group">
              <h4>Get Involved</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/contact">Volunteer</Link>
                </li>
                <li>
                  <Link to="/sponsors">Work with us</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 about-group">
              <h4>About us</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/about">Our team</Link>
                </li>
                <li>
                  <Link to="/contact">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
          <small className="d-inline-block mt-3 text-muted">
            This independent TEDx event is operated under license from TED.
          </small>
        </div>
      </footer>
    );
  }
}

export default Footer;
