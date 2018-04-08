import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import banner from '../assets/slogan.jpg';
import '../css/SponsorsPage.css';

import guild from '../assets/sponsors/guild.png';
import wamss from '../assets/sponsors/wamss.png';
import atomicFrontier from '../assets/sponsors/atomic_frontier.png';
import uwa from '../assets/sponsors/uwa.png';

const SPONSORS = {
  gold: [
    {logo: guild, name: 'UWA Guild', blurb: 'The UWA Student Guild represents all students at the University of Western Australia and provides various educational and related services.'},
    {logo: atomicFrontier, name: 'Atomic Frontier', blurb: 'We explore science and adventure from across Perth and around the world. Join us with monthly episodes from atoms to the final frontier.'},
    {logo: uwa, name: 'University of Western Australia', blurb: `We're a research-intensive university ranked in the world's top 1% of academic institutions. We encourage our students, staff and alumni to explore the unknown, challenge convention and make things happen.`}
  ],
  silver: [
    {logo: wamss, name: `The Western Australian Medical Students' Society`}
  ],
  bronze: []
};

export default class SponsorsPage extends Component {
  state = {
    sponsorsExpanded: false
  }
  expand = () => this.setState({sponsorsExpanded: true});
  render() {
    return (
      <div className='sponsors page'>
        <PageHeader title='Work With Us' image={banner} />
        <div className="bg-primary text-white mission-group">
          <div className="py-5 container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="font-weight-bold mb-3">
                  Our <br/>
                  Mission
                </h1>
              </div>
              <div className="col-md-6">
                <p className="lead mb-3">
                  We seek to find and share ideas from arround the world and closer to home with the UWA community. We seek to inspire active participation in important discussions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-4">
          <h3 className="font-weight-bold mb-4 text-center">Our sponsors</h3>
          <div className="gold-group row text-center d-flex justify-content-center mb-3">
            {SPONSORS.gold.map(sponsor => (
              <div className="col-sm-6 col-md-4 card border-0" key={sponsor.name}>
                <img src={sponsor.logo} alt={sponsor.name} className='card-img-top py-1 px-3'/>
                <div className="card-body p-1 pt-3">
                  <h3 className='card-title h4 font-weight-bold'>{sponsor.name}</h3>
                  <p className="card-text">{sponsor.blurb}</p>
                </div>
              </div>  
            ))}
          </div>
          {!this.state.sponsorsExpanded ? <button className="btn btn-light w-100" onClick={this.expand}>See all</button> : null}
          {this.state.sponsorsExpanded ?
            <div>
              <div className="silver-group row text-center d-flex justify-content-center mb-3">
                {SPONSORS.silver.map(sponsor => (
                  <div className="col-sm-6 col-md-4 card border-0" key={sponsor.name}>
                    <img src={sponsor.logo} alt={sponsor.name} className='card-img-top py-1 px-3'/>
                    <div className="card-body p-1 pt-3">
                      <h3 className='card-title h4 font-weight-bold'>{sponsor.name}</h3>
                    </div>
                  </div>  
                ))}
              </div>
              <div className="bronze-group row text-center d-flex justify-content-center mb-3">
                {SPONSORS.bronze.map(sponsor => (
                  <div className="col-sm-6 col-md-4 card border-0" key={sponsor.name}>
                    <img src={sponsor.logo} alt={sponsor.name} className='card-img-top py-1 px-3'/>
                  </div>  
                ))}
              </div>
            </div>
          : null}
        </div>
        <hr/>
        <div className="call-to-action-group bg-light">
          <div className="container py-4">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <h3 className="font-weight-bold mb-3">Become a sponsors today!</h3>
                <p className="lead text-muted">Contact us to discuss how you can help make a difference with TEDxUWA. If your business specialises in venue, catering, marketing, signage, production or merchendise any assistance would be greatly appreciated.</p>
              </div>
              <div className="col-md-6">
                <ContactForm noTitle/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
