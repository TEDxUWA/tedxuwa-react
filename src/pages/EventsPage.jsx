import React, { Component } from 'react';
import PageHeader from "../components/PageHeader";
import EventCard from "../components/EventCard";
import slugify from "slugify";
import Media from "react-media";
import {Switch, Route} from 'react-router';
import banner from '../assets/stage.jpg';

const upcomingEvents = [
  {
    type: 'conference',
    date: 'TBA',
    location: 'Octagon Theatre',
    title: 'TEDxUWA 2018: Turning Points',
    description: `TEDxUWA 2018 at the Octagon Theatre. The theme of this year is 'Turning Points'`,
    image: 'https://source.unsplash.com/featured/?abstract'
  },
  {
    type: 'workshop',
    date: 'Tuesday, 8th May 2018',
    location: 'TBA',
    title: 'Life After Debt Workshop',
    description: 'TEDxUWA & UWA Business School presents the Life After Debt Workshop',
    image: 'https://source.unsplash.com/featured/?workshop'
  }
];

class EventList extends Component {
  state = {
    upcoming: upcomingEvents,
    past: [],
    pastLimit: 3,
  };
  showAllPast = () => this.setState({pastLimit: this.state.past.length});
  render() {
    return (
      <Media query="(max-width: 768px)">
      {match => <div>
        <div className="container py-4">
          <h3 className="font-weight-bold mb-4">Upcoming events</h3>
          <div className="container px-0">
            <div className="row card-group">
              {this.state.upcoming.map(event => (
                <div className={`col-12 col-sm-6 col-md-4 ${match ? "p-0" : "pb-3"}`} key={slugify(event.title, {lower: true})}>
                  <EventCard data={event}/>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr/>
        <div className="container py-4">
          <h3 className="font-weight-bold mb-4">Past events</h3>
          <div className="container px-0">
            <div className="row card-group">
              {this.state.past.slice(0, this.state.pastLimit).map(event => (
                <div className={`col-12 col-sm-6 col-md-4 ${match ? "p-0" : "pb-3"}`} key={slugify(event.title, {lower: true})}>
                  <EventCard data={event}/>
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
  }
  componentDidMount = () => {
    const event = upcomingEvents.find(e => slugify(e.title, {lower: true}) === this.props.match.params.eventSlug);
    this.setState({event});
  }
  render() {
    const {event} = this.state;
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-md-7 mb-4">
            <h3 className="font-weight-bold">{event.title}</h3>
            <p className="lead text-muted">{event.description}</p>
            <img src={event.image} alt={event.title} className='img-fluid mt-3'/>
          </div>
          <div className="col-md-5">
            <div className="card p-3">
              <p>{event.date}</p>
              <p>{event.location}</p>
              <div className="mt-3">
                <iframe title='event-location-map-embed' className='w-100' src={`https://maps.google.com/maps?q=${event.location}&t=&z=17&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
              </div>
              <button className="btn btn-success mt-3">Purchase tickets</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class EventsPage extends Component {
  render() {
    const root = '/events';
    const lead = "The TEDxUWA movement aims to be actively involved within the campus culture of the UWA community and help foster ideas throughout the year. Check out this year's events below, or view highlights from previous years.";
    return (
      <div className="events page">
        <PageHeader title="Events" image={banner} lead={root === this.props.location.pathname ? lead : null} root={root}/>
        <Switch>
          <Route path={`${root}/:eventSlug`} component={EventDetail}/>
          <Route path={`${root}`} component={EventList}/>
        </Switch>
      </div>
    );
  }
}

export default EventsPage;