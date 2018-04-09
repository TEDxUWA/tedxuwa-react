import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo_dark from "../assets/logo_dark-no_padding.svg";
import "../css/Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      links: [
        {to: '/events', text: 'events'},
        {to: '/about', text: 'about'},
        {to: '/contact', text: 'contact'},
        {to: '/sponsors', text: 'get involved'}
      ]
    };
  }
  toggleNav = () => this.setState({showNav: !this.state.showNav});
  render() {
    const currentPath = this.props.location.pathname;
    return (
      <div>
        <nav className="navbar fixed-top text-uppercase px-0 py-2">
          <div className="container">
            <div className="col-10 col-md-3 pl-0">
              <Link to="/">
                <img src={logo_dark} alt="TEDxUWA" className="navbar-brand logo img-fluid"/>
              </Link>
            </div>
            <div className="nav-group col-sm-6 col-md-7 d-none d-md-block p-0">
              <ul className="list-inline navbar-links">
                {this.state.links.map(link => (
                  <li className={`nav-item list-inline-item ${currentPath.includes(link.to) ? 'active' : ''}`} key={link.to}>
                    <Link to={link.to}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-sm-4 col-md-2 px-0 d-none d-md-block">
              <button className="btn btn-outline-primary text-uppercase fl-right">buy ticket</button>
            </div>
            <div className="col-2 d-block d-md-none px-0" onClick={this.toggleNav}>
              <i className="fas fa-bars fl-right"/>
            </div>
          </div>
          <div className="xs-nav w-100 mt-2 border-top bg-white animation-fade border" hidden={!this.state.showNav}>
            <ul className="nav-flex-column">
              {this.state.links.map(link => (
                <li className={`nav-item ${currentPath.includes(link.to) ? 'active' : ''}`}key={link.to} onClick={this.toggleNav}>
                  <Link to={link.to} className="nav-link text-dark font-weight-bold">{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="nav-placeholder"></div>
      </div>
    );
  }
}

export default Navbar;