import React, { Component } from 'react';
import landing_illustration from '../assets/tp_date_teaser.png';
import { Link } from 'react-router-dom';
import speaker_icon from '../assets/speaker.png';
import { SPEAKER_REGISTRATION_LINK } from '../services/Globals';
import API from '../services/Api';
import dayjs from 'dayjs';
import slugify from 'slugify';
import '../css/LandingPage.css';

class Opening extends Component {
  state = {
    featuredEvent: {}
  };
  componentDidMount() {
    API.GET('events').then(data => {
      const featuredEvent = data.results.find(e => e.featured) || {};
      this.setState({ featuredEvent });
    });
  }
  render() {
    const featured = this.state.featuredEvent;
    const date = featured.start
      ? dayjs(featured.start).format('dddd, D MMMM YYYY')
      : '';
    const ticketPath = featured.name
      ? `${featured.id}/${slugify(featured.name || '', { lower: true })}`
      : '';
    return (
      <div className="landing opening">
        <img src={landing_illustration} alt="TEDxUWA" className="bg-image" />
        <div className="container">
          <div className="hero-container">
            <h1 className="hero-text">
              <span className="text-primary">06.10.18</span>
              <br />Save the date.
            </h1>
            <p className="hero-subtext">
              {featured.name}
              <br /> {date}
            </p>
            <Link to={`/events/${ticketPath}`}>
              <button className="btn btn-primary text-uppercase">
                buy tickets
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
function Speaker() {
  return (
    <div className="landing speaker">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 d-block d-sm-none mx-auto">
            <img src={speaker_icon} alt="Want speak at an event?" />
          </div>
          <div className="col-md-7">
            <h2>Want to speak at an event?</h2>
            <h4>
              Do you have an idea worth spreading? A talent you want to share
              with the world? Applications for 2018 speakers are now open. Let
              us know what you would like to share, and we will find you an
              audience!
            </h4>
            <a
              href={SPEAKER_REGISTRATION_LINK}
              rel="noreferrer noopener"
              target="_blank"
              role="button"
              className="btn btn-light"
            >
              Learn more
            </a>
          </div>
          <div className="col-md-5 d-none d-sm-block">
            <img src={speaker_icon} alt="Want speak at an event?" />
          </div>
        </div>
      </div>
    </div>
  );
}
function Intro() {
  return (
    <div className="landing intro container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="font-weight-bold mb-3 mb-md-0">
            Technology <br />
            Entertainment <br />
            Design <br />
          </h1>
        </div>
        <div className="col-md-6">
          <p className="lead mb-3">
            In the spirit of ideas worth spreading, TED has created a program
            called TEDx. TEDx is a program of local, self-organized events that
            bring people together to share a TED-like experience.
          </p>
          <Link
            to="/about"
            className="link-unset text-primary font-weight-bold"
          >
            Learn more about what we do&nbsp;<i className="fa fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}

class LandingPage extends Component {
  render() {
    return (
      <div className="landing page">
        <Opening />
        <Speaker />
        <Intro />
      </div>
    );
  }
}

export default LandingPage;
