import React, {Component} from "react";
import PageHeader from "../components/PageHeader";
import {Link} from 'react-router-dom';

class ContactPage extends Component {
  render() {
    return (
      <div className="about page">
        <PageHeader title="Contact Us"/>
        <div className="people-group container py-4">
          <div className="row">
            <div className="col-md-4">
              <div className="card rounded-0 card-hover">
                <div className="card-body">
                  <h3 className="card-title">Leanne Jiang</h3>
                  <p className="card-text">President</p>
                  <p className="card-text text-muted">president.tedxuwa@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded-0 card-hover">
                <div className="card-body">
                  <h3 className="card-title">Florence Ly</h3>
                  <p className="card-text">Head of Communications</p>
                  <p className="card-text text-muted">comm.tedxuwa@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded-0 card-hover">
                <div className="card-body">
                  <h3 className="card-title">Other enquiries</h3>
                  <p className="card-text text-muted">tedxuwa@gmail.com</p>
                  <p className="card-text text-muted">0420 613 22</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="sponsor-group container py-4">
          <h3 className="font-weight-bold mb-2">Want to work with us?</h3>
          <p>
            You can help us make a difference by sponsoring TEDxUWA.&nbsp;&nbsp;
            <Link to='/sponsors'>
              Find out how&nbsp;&nbsp;<i className="fas fa-arrow-right"/>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default ContactPage;