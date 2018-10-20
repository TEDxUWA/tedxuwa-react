import React, { Component } from 'react';
import '../css/SpeakerCard.css';

export default class SpeakerCard extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="speaker-card media">
        <img className="mr-3" src={data.profile_image} alt={data.name} />
        <div className="media-body">
          <h5 className="mt-0 font-weight-bold text-white">{data.name}</h5>
          <p className="text-light mt-2">{data.bio}</p>
        </div>
      </div>
    );
  }
}
