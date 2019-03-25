import React, { Component } from "react";
import PageHeader from "../../components/PageHeader";
import EventCard from "../../components/EventCard";
import Media from "react-media";
import banner from "../../assets/stage.jpg";
import API from "../../services/Api";
import dayjs from "dayjs";
import ExploreTalksSection from "../../components/ExploreTalksSection";
import "../../css/EventsPage.css";

class EventList extends Component {
  state = {
    upcoming: [],
    past: [],
    pastLimit: 3
  };
  showAllPast = () => this.setState({ pastLimit: this.state.past.length });
  componentDidMount() {
    document.title = "TEDxUWA | Events";
    API.GET("events")
      .then(data => {
        let events = this.sortEvents(data.results);
        this.setState({
          upcoming: events.upcoming,
          past: events.past
        });
      })
      .catch(err => {
        console.error(`Something went wrong: ${err.message}`);
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
  };
  render() {
    const root = "/events";
    const lead =
      "The TEDxUWA movement aims to be actively involved within the campus culture of the UWA community and help foster ideas throughout the year. Check out this year's events below, or view highlights from previous years.";
    return (
      <Media query="(max-width: 768px)">
        {match => (
          <div>
            <PageHeader
              title="Events"
              image={banner}
              lead={root === this.props.location.pathname ? lead : null}
              root={root}
            />
            {this.state.upcoming.length ? (
              <div className="container py-4">
                <h3 className="font-weight-bold mb-4">Upcoming events</h3>
                <div className="container px-0">
                  <div className="row card-group">
                    {this.state.upcoming.map(event => (
                      <div
                        className={`col-12 col-sm-6 col-md-4 ${
                          match ? "p-0" : "pb-3"
                        }`}
                        key={event.id}
                      >
                        <EventCard data={event} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
            <ExploreTalksSection />
            <div className="container py-4">
              <h3 className="font-weight-bold mb-4">Past events</h3>
              <div className="container px-0">
                <div className="row card-group">
                  {this.state.past.slice(0, this.state.pastLimit).map(event => (
                    <div
                      className={`col-12 col-sm-6 col-md-4 ${
                        match ? "p-0" : "pb-3"
                      }`}
                      key={event.id}
                    >
                      <EventCard data={event} />
                    </div>
                  ))}
                </div>
                <button
                  className="btn btn-light mx-auto mt-3 w-100"
                  onClick={this.showAllPast}
                  hidden={this.state.pastLimit === this.state.past.length}
                >
                  Show all
                </button>
              </div>
            </div>
          </div>
        )}
      </Media>
    );
  }
}

export default EventList;
