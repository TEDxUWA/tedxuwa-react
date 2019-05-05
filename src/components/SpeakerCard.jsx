import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
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
          <h2 className="mt-0 font-weight-bold text-white">{name}</h2>
          <p className="text-light mt-2">{tag_line}</p>
        </div>
      </div>,
      <Modal
        key="modal"
        className="speaker-card-modal"
        isOpen={showModal}
        toggle={this.toggleModal}
        centered={true}
      >
        <ModalHeader toggle={this.toggleModal}>{name}</ModalHeader>
        <ModalBody>
          {tag_line && <p className="mb-3">{tag_line}</p>}
          {bio && <p>{bio}</p>}
        </ModalBody>
      </Modal>
    ];
  }
}
