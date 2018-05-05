import React, { Component } from 'react';
import PageHeader from "../components/PageHeader";
import EventCard from "../components/EventCard";
import Media from "react-media";
import { Switch, Route } from 'react-router';
import banner from '../assets/stage.jpg';
import ReactMarkdown from 'react-markdown';
import API from '../services/Api';
import dayjs from 'dayjs';
import '../css/EventsPage.css';

class EventList extends Component {
  state = {
    upcoming: [],
    past: [],
    pastLimit: 3,
  };
  showAllPast = () => this.setState({ pastLimit: this.state.past.length });
  componentDidMount = () => {
    API.GET('events').then(data => {
      let events = this.sortEvents(data.results);
      this.setState({
        upcoming: events.upcoming,
        past: events.past,
      });
    }).catch(err => {
      alert(`Something went wrong: ${err.message}`);
    });
  }
  sortEvents = events => {
    let upcoming = [];
    let past = [];
    events.forEach(e => {
      let start = dayjs(e.start);
      if (start.isBefore(dayjs())) {
        //is before now, is in the past
        past.push(e);
      } else {
        upcoming.push(e);
      }
    });
    return { upcoming, past };
  }
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
                  <div className={`col-12 col-sm-6 col-md-4 ${match ? "p-0" : "pb-3"}`} key={event.id}>
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
                  <div className={`col-12 col-sm-6 col-md-4 ${match ? "p-0" : "pb-3"}`} key={event.id}>
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
    API.GET(`events/${this.props.match.params.eventId}`).then(event => {
      this.setState({ event });
    });
  }
  render() {
    const { event = {} } = this.state;
    const start = dayjs(event.start).format("dddd, D MMMM YYYY");
    return (
      <div>
        <div className="jumbotron text-white rounded-0" style={{
          backgroundImage: `url(${event.banner_image})`
        }}>
          <div className="py-4 w-100 bottom-stuck">
            <div className="container">
              <h1 className="font-weight-bold">{event.name}</h1>
              <p className="lead">{start} <span className="badge badge-light">{event.location}</span></p>
            </div>
          </div>
        </div>
        <div className="py-5 bg-primary text-white">
          <div className="container">
            <ReactMarkdown source={(event.description || "").substr(0, (event.description || "").indexOf("."))} className='markdown lead' />
          </div>
        </div>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-7 mb-4">
              <ReactMarkdown source={event.description} className='markdown' />
            </div>
            {!event.past ?
              <div className="col-md-5">
                <div className="card p-3">
                  <p>{start}</p>
                  <p>{event.location}</p>
                  <div className="mt-3">
                    <iframe title='event-location-map-embed' className='w-100' src={`https://maps.google.com/maps?q=${event.location}&t=&z=17&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                  </div>
                  <a href={event.ticket_url} className='link-unset' rel='noopener noreferrer'>
                    <button className="btn btn-success mt-3">Purchase tickets</button>
                  </a>
                </div>
              </div>
              : null}
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
          <Route path={`${root}/:eventId/:eventSlug`} component={EventDetail} />
          <Route path={`${root}`} component={EventList} />
        </Switch>
      </div>
    );
  }
}

export default EventsPage;