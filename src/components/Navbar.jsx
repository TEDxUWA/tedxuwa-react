import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo_dark from '../assets/logo_dark-no_padding.svg';
import { SPEAKER_REGISTRATION_LINK } from '../services/Globals';
import slugify from 'slugify';
import API from '../services/Api';
import '../css/Navbar.css';
import { slugConfig } from '../global/constants';

class Navbar extends Component {
  state = {
    showNav: false,
    links: [
      { to: '/about', text: 'about' },
      { to: '/events', text: 'events' },
      {
        to: '/sponsors',
        text: 'get involved',
        subLinks: [
          { to: '/sponsors', text: 'Partners' },
          { to: SPEAKER_REGISTRATION_LINK, absolute: true, text: 'Speakers' },
          { to: '/contact', text: 'Volunteers' }
        ]
      },
      { to: '/contact', text: 'contact' }
    ],
    hovering: [],
    featuredEvent: {}
  };
  componentDidMount = () => {
    API.GET('events').then(data => {
      const featuredEvent = data.results.find(e => e.featured) || {};
      this.setState({ featuredEvent });
    });
  };
  toggleNav = () => this.setState({ showNav: !this.state.showNav });
  toggleNavHover = link =>
    this.setState(oldState => {
      let hovering = Array.from(oldState.hovering);
      hovering.includes(link.to)
        ? hovering.splice(hovering.indexOf(link.to), 1)
        : hovering.push(link.to);
      return Object.assign({}, oldState, { hovering });
    });
  render() {
    const currentPath = this.props.location.pathname;
    const featured = this.state.featuredEvent;
    const ticketPath = featured.name
      ? `${featured.id}/${slugify(featured.name || '', slugConfig)}`
      : '';
    return (
      <div>
        <nav className="navbar fixed-top text-uppercase px-0 py-2">
          <div className="container">
            <div className="col-10 col-md-3 pl-0">
              <Link to="/">
                <img
                  src={logo_dark}
                  alt="TEDxUWA"
                  className="navbar-brand logo"
                />
              </Link>
            </div>
            <div className="nav-group col-sm-6 col-md-7 d-none d-md-block p-0">
              <ul className="list-inline navbar-links">
                {this.state.links.map(link => (
                  <li
                    className={`nav-item list-inline-item ${
                      currentPath.includes(link.to) ? 'active' : ''
                    }`}
                    key={link.to}
                    onMouseEnter={() => this.toggleNavHover(link)}
                    onMouseLeave={() => this.toggleNavHover(link)}
                  >
                    <Link to={link.to}>{link.text}</Link>
                    {link.subLinks && this.state.hovering.includes(link.to) ? (
                      <ul className="sub-links bg-white border-bottom p-2">
                        {link.subLinks.map(subLink => (
                          <li
                            key={subLink.to}
                            className="py-2 px-2 border-top border-bottom d-block"
                          >
                            {subLink.absolute ? (
                              <a href={subLink.to}>{subLink.text}</a>
                            ) : (
                              <Link to={subLink.to}>{subLink.text}</Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-sm-4 col-md-2 px-0 d-none d-md-block">
              <Link to={`/events/${ticketPath}`}>
                <button className="btn btn-outline-primary text-uppercase fl-right">
                  buy tickets
                </button>
              </Link>
            </div>
            <div
              className="col-2 d-block d-md-none px-0"
              onClick={this.toggleNav}
            >
              <i className="fas fa-bars fl-right" />
            </div>
          </div>
          <div
            className="xs-nav w-100 mt-2 border-top bg-white animation-fade border"
            hidden={!this.state.showNav}
          >
            <div className="container">
              <div className="row">
                <ul className="nav-flex-column list-unstyled">
                  {this.state.links.map(link => (
                    <li
                      className={`nav-item ${
                        currentPath.includes(link.to) ? 'active' : ''
                      }`}
                      key={link.to}
                      onClick={this.toggleNav}
                    >
                      <Link
                        to={link.to}
                        className="nav-link text-dark font-weight-bold"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="nav-placeholder" />
      </div>
    );
  }
}

export default Navbar;
