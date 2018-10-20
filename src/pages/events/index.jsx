import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import EventList from './EventList';
import EventDetail from './EventDetail';
import '../../css/EventsPage.css';

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
