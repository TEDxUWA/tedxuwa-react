import React, {Component} from "react";
import PageHeader from "../components/PageHeader";
import {Link} from 'react-router-dom';

class ContactPage extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  }
  handleNameChange = (e) => this.setState({name: e.target.value})
  handleEmailChange = (e) => this.setState({email: e.target.value})
  handleMessageChange = (e) => this.setState({message: e.target.value})
  render() {
    return (
      <div className="about page">
        <PageHeader title="Contact Us"/>
        <div className="container">
          <div className="row">
            <div className="people-group col-md-6 py-4">
              <div className="row">
                <div className="col-12 mb-3">
                  <a href="mailto:president.tedxuwa@gmail.com" className='link-unset' rel='noopener noreferrer' target='_blank'>
                    <div className="card rounded-0 card-hover">
                      <div className="card-body">
                        <h3 className="card-title">Leanne Jiang</h3>
                        <p className="card-text">President</p>
                        <p className="card-text text-muted">president.tedxuwa@gmail.com</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-12 mb-3">
                  <a href="mailto:communications.tedxuwa@gmail.com" className='link-unset' rel='noopener noreferrer' target='_blank'>
                    <div className="card rounded-0 card-hover">
                      <div className="card-body">
                        <h3 className="card-title">Florence Ly</h3>
                        <p className="card-text">Head of Communications</p>
                        <p className="card-text text-muted">communications.tedxuwa@gmail.com</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-12">
                  <div className="card rounded-0 border-0">
                    <div className="card-body">
                      <h3 className="card-title">Other enquiries</h3>
                      <p className="card-text text-muted">tedxuwa@gmail.com</p>
                      <p className="card-text text-muted">0420 613 222</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group col-md-6 py-4">
              <form onSubmit={this.handleSubmit} className='row'>
                <h3 className="font-weight-bold mb-3 col-12">Get in touch</h3>
                <div className="form-group col-md-6">
                  <label htmlFor="contactFormName">Your name</label>
                  <input className='form-control' type="text" id='contactFormName' value={this.state.name} onChange={this.handleNameChange} required/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="contactFormEmail">Email</label>
                  <input className='form-control' type="email" id='contactFormEmail' value={this.state.email} onChange={this.handleEmailChange} required/>
                </div>
                <div className="form-group col-12">
                  <label htmlFor="contactFormMessage">Message</label>
                  <textarea className='form-control' id='contactFormMessage' value={this.state.message} onChange={this.handleMessageChange} required/>
                </div>
                <div className="col-12">
                  <button type='submit' className='btn btn-outline-dark'>Send</button>
                </div>
              </form>
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