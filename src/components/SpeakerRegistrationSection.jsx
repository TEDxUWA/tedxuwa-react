import React, { Component } from 'react';
import {SPEAKER_REGISTRATION_LINK} from "../services/Globals";

class SpeakerRegistrationSection extends Component {
  render() {
    return (
      <div className="bg-light py-4 px-0">
        <div className="container">
          <h4 className="font-weight-bold mb-2">Got an idea worth spreading?</h4>
          <p>
            Apply to speak at our events.&nbsp;&nbsp;
            <a href={SPEAKER_REGISTRATION_LINK} rel="noreferrer noopener" target="_blank" className="text-primary">
              Learn more&nbsp;&nbsp;<i className="fas fa-external-link-alt"/>
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default SpeakerRegistrationSection;