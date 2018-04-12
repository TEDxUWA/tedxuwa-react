import React, { Component } from 'react';
import PageHeader from "../components/PageHeader";
import EventCard from "../components/EventCard";
import slugify from "slugify";
import Media from "react-media";
import { Switch, Route } from 'react-router';
import banner from '../assets/stage.jpg';
import ReactMarkdown from 'react-markdown';
import '../css/EventsPage.css';

const upcomingEvents = [
  {
    type: 'conference',
    date: 'TBA',
    location: 'Octagon Theatre',
    title: 'TEDxUWA 2018',
    blurb: `TEDxUWA 2018 at the Octagon Theatre`,
    description: require('../events/TurningPoint.md'),
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0956178e44084db0e4a725c8b1e370e9&auto=format&fit=crop&w=1050&q=80',
    link: 'https://www.trybooking.com/VDMJ'
  },
  {
    type: 'workshop',
    date: 'Tuesday, 8th May 2018',
    location: 'EY Lecture Theatre',
    title: 'Life After Debt Workshop',
    blurb: 'TEDxUWA & UWA Business School presents the Life After Debt Workshop',
    description: require('../events/LifeAfterDebt.md'),
    image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7627d227061b49e48737d835fda210a7&auto=format&fit=crop&w=1030&q=80',
    link: '#'
  }
];

class EventList extends Component {
  state = {
    upcoming: upcomingEvents,
    past: [],
    pastLimit: 3,
  };
  showAllPast = () => this.setState({ pastLimit: this.state.past.length });
  render() {
    const root = '/events';
    const lead = "The TEDxUWA movement aims to be actively involved within the campus culture of the UWA community and help foster ideas throughout the year. Check out this year's events below, or view highlights from previous years.";
    return (
      <Media query="(max-width: 768px)">
        {match => <div>
          <PageHeader title="Events" image={banner} lead={root === this.props.location.pathname ? lead : null} root={root} />
          <div className="container py-4">
            <h3 className="font-weight-bold mb-4">Upcoming events</h3>
            <div className="container px-0">
              <div className="row card-group">
                {this.state.upcoming.map(event => (
                  <div className={`col-12 col-sm-6 col-md-4 ${match ? "p-0" : "pb-3"}`} key={slugify(event.title, { lower: true })}>
                    <EventCard data={event} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr />
          <div className="container py-4">
            <h3 className="font-weight-bold mb-4">Past events</h3>
            <div className="container px-0">
              <div className="row card-group">
                {this.state.past.slice(0, this.state.pastLimit).map(event => (
                  <div className={`col-12 col-sm-6 col-md-4 ${match ? "p-0" : "pb-3"}`} key={slugify(event.title, { lower: true })}>
                    <EventCard data={event} />
                  </div>
                ))}
              </div>
              <button className="btn btn-light mx-auto mt-3 w-100" onClick={this.showAllPast} hidden={this.state.pastLimit === this.state.past.length}>Show all</button>
            </div>
          </div>
        </div>}
      </Media>
    );
  }
}

class EventDetail extends Component {
  state = {
    event: {},
    description: ''
  }
  componentDidMount = () => {
    const event = upcomingEvents.find(e => slugify(e.title, { lower: true }) === this.props.match.params.eventSlug);
    this.setState({ event });
    if (event) this.fetchDescription(event.description);
  }
  fetchDescription = (path) => {
    fetch(path).then(data => data.text()).then(desc => this.setState({ description: desc }));
  }
  render() {
    const { event } = this.state;
    return (
      <div>
        <div className="jumbotron text-white rounded-0" style={{
          backgroundImage: `url(${event.image})`
        }}>
          <div className="py-4 w-100 bottom-stuck">
            <div className="container">
              <h1 className="font-weight-bold">{event.title}</h1>
              <p className="lead">{event.date} <span className="badge badge-light">{event.location}</span></p>
            </div>
          </div>
        </div>
        <div className="py-5 bg-primary text-white">
          <div className="container">
            <p className='lead'>{event.blurb}</p>
          </div>
        </div>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-7 mb-4">
              <ReactMarkdown source={this.state.description} className='markdown' />
            </div>
            <div className="col-md-5">
              <div className="card p-3">
                <p>{event.date}</p>
                <p>{event.location}</p>
                <div className="mt-3">
                  <iframe title='event-location-map-embed' className='w-100' src={`https://maps.google.com/maps?q=${event.location}&t=&z=17&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>
                <a href={event.link} className='link-unset' rel='noopener noreferrer'>
                  <button className="btn btn-success mt-3">Purchase tickets</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class EventsPage extends Component {
  render() {
    const root = '/events';
    return (
      <div className="events page">
        <Switch>
          <Route path={`${root}/:eventSlug`} component={EventDetail} />
          <Route path={`${root}`} component={EventList} />
        </Switch>
      </div>
    );
  }
}

export default EventsPage;