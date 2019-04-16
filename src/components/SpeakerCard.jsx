import React, { Component } from "react";
import Modal from "react-modal";
import "../css/SpeakerCard.css";

export default class SpeakerCard extends Component {
  state = {
    showModal: false
  };
  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  render() {
    const { showModal } = this.state;
    const { data } = this.props;
    const { name, profile_image, tag_line, bio } = data;
    return [
      <div className="speaker-card media" onClick={this.toggleModal} key="card">
        <img className="mr-3" src={profile_image} alt={name} />
        <div className="media-body">
          <h5 className="mt-0 font-weight-bold text-white">{name}</h5>
          <p className="text-light mt-2">{tag_line}</p>
        </div>
      </div>,
      <Modal
        key="modal"
        isOpen={showModal}
        onRequestClose={this.toggleModal}
        style={{
          background: "transparent",
          top: 120,
          border: "none",
          width: "50%",
          margin: "auto"
        }}
      >
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-end">
            <button
              type="button"
              class="close"
              aria-label="Close"
              onClick={this.toggleModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h3 className="font-weight-bold mb-1">{name}</h3>
            <p className="lead mb-3">{tag_line}</p>
            <p>{bio}</p>
          </div>
        </div>
      </Modal>
    ];
  }
}
