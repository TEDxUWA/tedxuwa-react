import React, { Component } from 'react';
import PageHeader from "../components/PageHeader";
import EventCard from "../components/EventCard";
import slugify from "slugify";
import Media from "react-media";
import {Switch, Route} from 'react-router'

const dummy = [
  {
    type: 'conference',
    date: 'Wednesday, 15th Oct 2018',
    location: 'Octagon Theatre',
    title: 'Foo dummy bar conference',
    description: 'a fun dolor sorem ipsum aljd kjsioj sdalw.',
    image: 'https://source.unsplash.com/featured/?abstract'
  },
  {
    type: 'workshop',
    date: 'Monday, 12th August 2018',
    location: 'FLUX',
    title: 'Foo dummy bar workshop',
    description: 'a fun d sdjfhk as jalkjis kaslolor sorem ipsum aljd kjsioj sdalw.',
    image: 'https://source.unsplash.com/featured/?workshop'
  }
];

class EventList extends Component {
  state = {
    upcoming: Array(4).fill(null).map(() => dummy[Math.round(Math.random())]),
    past: Array(5).fill(null).map(() => dummy[Math.round(Math.random())]),
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
            <button className="btn btn-light mx-auto mt-3" onClick={this.showAllPast} hidden={this.state.pastLimit === this.state.past.length}>Show all</button>
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
    const event = dummy.find(e => slugify(e.title, {lower: true}) === this.props.match.params.eventSlug);
    this.setState({event});
  }
  render() {
    const {event} = this.state;
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-md-7">
            <h3 className="font-weight-bold">{event.title}</h3>
            <p className="lead text-muted">{event.description}</p>
            <img src={event.image} alt={event.title} className='img-fluid mt-3'/>
          </div>
          <div className="col-md-5">
            <div className="card p-3">
              <p>{event.date}</p>
              <p>{event.location}</p>
              <div class="mt-3">
                <iframe className='w-100' src="https://maps.google.com/maps?q=octagon theatre&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
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
        <PageHeader title="Events" lead={root === this.props.location.pathname ? lead : null} root={root}/>
        <Switch>
          <Route path={`${root}/:eventSlug`} component={EventDetail}/>
          <Route path={`${root}`} component={EventList}/>
        </Switch>
      </div>
    );
  }
}

export default EventsPage;