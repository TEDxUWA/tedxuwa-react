import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import API from '../../services/Api';
import dayjs from 'dayjs';
import SpeakerCard from '../../components/SpeakerCard';
import '../../css/EventsPage.css';

class EventDetail extends Component {
  state = {
    event: {},
    description: '',
    speakers: []
  };
  componentDidMount() {
    API.GET(`events/${this.props.match.params.eventId}`).then(event => {
      this.setState({ event });
      document.title = `TEDxUWA | ${event.name}`;
    });
    API.GET(`events/${this.props.match.params.eventId}/speakers`).then(data => {
      this.setState({ speakers: data.results });
    });
  }
  render() {
    const { event = {}, speakers = [] } = this.state;
    const start = dayjs(event.start).format('dddd, D MMMM YYYY');
    console.log(event);
    return (
      <div>
        <div
          className="jumbotron text-white rounded-0"
          style={{
            backgroundImage: `url(${event.banner_image})`
          }}
        >
          <div className="py-4 w-100 bottom-stuck">
            <div className="container">
              <h1 className="font-weight-bold">{event.name}</h1>
              <p className="lead">
                {start}{' '}
                <span className="badge badge-light">{event.location}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="py-4 bg-primary text-white">
          <div className="container mt-2">
            <h4 className="mb-3 font-weight-bold">Speakers</h4>
            <ul className="list-inline list-unstyled speakers-list pb-2">
              {speakers.map(speaker => (
                <li key={speaker.id} className="list-inline-item">
                  <SpeakerCard data={speaker} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-7 mb-4">
              <ReactMarkdown source={event.description} className="markdown" />
              <a href={event.ticket_url} className="link-unset">
                <button className="btn btn-primary btn-block">
                  Get tickets
                </button>
              </a>
            </div>
            <div className="col-md-5">
              <div className="rounded-0 p-3">
                <div className="badge badge-primary">{event.event_type}</div>
                <h5 className="font-weight-bold mb-1 mt-3">Date and time</h5>
                <p>{start}</p>
                <h5 className="font-weight-bold mb-1 mt-3">Location</h5>
                <p>{event.location}</p>

                <a href={event.ticket_url} className="link-unset">
                  <button className="btn btn-primary btn-block mt-3">
                    Buy tickets
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventDetail;
