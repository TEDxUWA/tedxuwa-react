import React, { Component } from 'react';
import PageHeader from "../components/PageHeader";
import EventCard from "../components/EventCard";
import slugify from "slugify";
import Media from "react-media";

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

class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcoming: Array(4).fill(null).map(() => dummy[Math.round(Math.random())]),
      past: Array(5).fill(null).map(() => dummy[Math.round(Math.random())]),
      pastLimit: 3,
    };
  }
  showAllPast = () => this.setState({pastLimit: this.state.past.length});
  render() {
    return (
      <Media query="(max-width: 768px)">
      {match => 
        <div className="events page">
          <PageHeader title="Events" lead="The TEDxUWA movement aims to be actively involved within the campus culture of the UWA community and help foster ideas throughout the year. Check out this year's events below, or view highlights from previous years."/>
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
        </div>
      }
      </Media>
    );
  }
}

export default EventsPage;