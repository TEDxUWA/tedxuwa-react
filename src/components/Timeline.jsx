import React, { Component } from 'react';
import eventsData from '../events.json';
import '../css/Timeline.css';

class Timeline extends Component {
  render() {
    // Sort events by date descending
    const sortedEvents = eventsData.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
      <div className="timeline-container">
        <h3 className="font-weight-bold mb-4 text-center">Event Timeline</h3>
        <div className="timeline">
          {sortedEvents.map((event, index) => (
            <div key={event.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <h4>{event.title}</h4>
                <span className="date">{event.date}</span>
                <p>{event.description}</p>
                <small className="text-muted">{event.location}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Timeline;
