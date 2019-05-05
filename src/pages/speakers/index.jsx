import React, { Component } from "react";
import { Switch, Route } from "react-router";
import SpeakersList from "./List";

export default class SpeakersPage extends Component {
  render() {
    const root = "/speakers";
    return (
      <div className="speakers page">
        <Switch>
          <Route path={`${root}/:speakerId/:speakerSlug`} component={null} />
          <Route path={`${root}`} component={SpeakersList} />
        </Switch>
      </div>
    );
  }
}
