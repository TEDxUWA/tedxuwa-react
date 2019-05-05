import React, { Component } from "react";
import PageHeader from "../../components/PageHeader";
import API from "../../services/Api";
import SpeakerRegistrationSection from "../../components/SpeakerRegistrationSection";

export default class SpeakersListPage extends Component {
  state = {
    people: []
  };
  async componentDidMount() {
    document.title = "TEDxUWA | Speakers & Performers";
    const { results: people } = API.GET("speakers");
    this.setState({ people });
  }
  render() {
    return (
      <div className="speakers-list page">
        <PageHeader title="Speakers & Performers" root="/speakers" />
        <SpeakerRegistrationSection />
      </div>
    );
  }
}
