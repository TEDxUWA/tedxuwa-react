import React, { Component } from "react";
import landing_illustration from "../assets/landing_illustration.jpg";
import { Link } from "react-router-dom";
import speaker_icon from "../assets/speaker.png";
import { SPEAKER_REGISTRATION_LINK } from "../services/Globals";
import API from "../services/Api";
import dayjs from "dayjs";
import slugify from "slugify";
import "../css/LandingPage.css";
import { slugConfig } from "../global/constants";

class Opening extends Component {
  state = {
    featuredEvent: {}
  };
  componentDidMount() {
    API.GET("events/?featured").then(data => {
      this.setState({ featuredEvent: data });
    });
  }
  render() {
    const featured = this.state.featuredEvent;
    const date = featured.start
      ? dayjs(featured.start).format("dddd, D MMMM YYYY")
      : "";
    const ticketPath = featured.name
      ? `${featured.id}/${slugify(featured.name || "", slugConfig)}`
      : "";
    return (
      <div className="landing opening">
        <img src={landing_illustration} alt="TEDxUWA" className="bg-image" />
        <div className="bg-image-overlay" />
        <div className="container">
          <div className="hero-container">
            <h1 className="hero-text">
              <span className="text-primary">Ideas</span>
              <br />
              <span className="text-white">Worth Spreading</span>
            </h1>
            {!!featured.name ? (
              <div>
                <p className="hero-subtext text-white">
                  {featured.name}
                  <br /> {date}
                </p>
                <Link to={`/events/${ticketPath}`}>
                  <button className="btn btn-primary text-uppercase">
                    buy tickets
                  </button>
                </Link>
              </div>
            ) : null}
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
            <h2 className="mb-2">Have an idea worth spreading?</h2>
            <p className="lead mb-3">
              Do you have an idea worth spreading? A talent you want to share
              with the world? Contact us with your idea!
            </p>
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
            Learn more about what we do&nbsp;
            <i className="fa fa-arrow-right" />
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
