import React, { Component } from "react";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import SponsorCard from "../components/SponsorCard";
import Reach from "../components/Reach";
import banner from "../assets/slogan.jpg";
import API from "../services/Api";
import prospectus from "../assets/TEDxUWA Sponsorship Prospectus.pdf";
import "../css/SponsorsPage.css";

export default class SponsorsPage extends Component {
  state = {
    sponsorsExpanded: false,
    sponsors: []
  };
  componentDidMount() {
    document.title = "TEDxUWA | Work with us";
    this.fetchSponsors();
  }
  fetchSponsors = () => {
    API.GET("sponsors")
      .then(data => {
        const sponsors = this.groupSponsors(data.results);
        this.setState({ sponsors });
      })
      .catch(err => {
        console.error(`Something went wrong: ${err.message}`);
      });
  };
  groupSponsors = sponsors =>
    Object.values(
      sponsors.reduce((groups, sponsor) => {
        const { tier } = sponsor;
        if (groups[tier]) groups[tier].push(sponsor);
        groups[tier] = [sponsor];
        return groups;
      }, {})
    );
  expand = () => this.setState({ sponsorsExpanded: true });
  render() {
    const { sponsors } = this.state;
    return (
      <div className="sponsors page">
        <PageHeader title="Work With Us" image={banner} />
        <div className="bg-primary text-white mission-group">
          <div className="py-5 container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="font-weight-bold mb-3">
                  Our <br />
                  Mission
                </h1>
              </div>
              <div className="col-md-6">
                <p className="lead mb-3">
                  TEDxUWA aims to spread good ideas among the UWA community.
                  Creating a synergy of ideas between different disciplines and
                  people
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-4">
          <h3 className="font-weight-bold mb-4 text-center">Our sponsors</h3>
          {sponsors.map(group => (
            <div className="gold-group row text-center d-flex justify-content-center mb-3">
              {group.map(sponsor => (
                <SponsorCard sponsor={sponsor} key={sponsor.name} />
              ))}
            </div>
          ))}
        </div>
        <hr />
        <Reach />
        <div className="call-to-action-group bg-light py-4">
          <div className="container py-4">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <h3 className="font-weight-bold mb-3">
                  Become a sponsor today!
                </h3>
                <p className="lead text-muted">
                  Contact us to discuss how you can help make a difference with
                  TEDxUWA. If your business specialises in venue, catering,
                  marketing, signage, production or merchendise any assistance
                  would be greatly appreciated.
                </p>
                <a href={prospectus} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-dark mt-3">
                    Download our prospectus
                  </button>
                </a>
              </div>
              <div className="col-md-6">
                <ContactForm noTitle />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
