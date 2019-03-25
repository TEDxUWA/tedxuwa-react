import React, { Component } from "react";
import { YOUTUBE_LINK } from "../services/Globals";

export default class ExploreTalksSection extends Component {
  render() {
    return (
      <div className="bg-primary text-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-7">
              <h3 className="font-weight-bold mb-3">Explore recorded talks</h3>
              <p className="lead">
                All talks at TEDxUWA conferences are recorded and uploaded to
                YouTube. Explore ideas worth spreading shared by our speakers!
              </p>
              <a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-light mt-4">
                  Explore&nbsp;&nbsp;
                  <i className="fas fa-arrow-right" />
                </button>
              </a>
            </div>
            <div className="col-md-5 d-none d-sm-flex justify-content-end align-items-center">
              <i className="fas fa-chalkboard-teacher fa-5x" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
