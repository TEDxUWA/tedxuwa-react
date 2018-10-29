import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/NotFound.css';

export default class NotFound extends Component {
  render() {
    return (
      <div className="not-found page container">
        <div className="container shape-container">
          <div className="circle bg-primary" />
          <div className="square bg-primary" />
          <div className="triangle" />
        </div>
        <div className="content-container text-center">
          <h1 className="display-2 text-primary">404</h1>
          <h3 className="font-weight-bold">Entering the unknown</h3>
          <p>Hmmm, the page you&apos;re looking for does not exist!</p>
          <Link to="/events">
            <button className="btn btn-link text-primary px-0">
              View our events&nbsp;&nbsp;
              <i className="fa fa-arrow-right" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
