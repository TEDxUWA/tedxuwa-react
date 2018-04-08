import React, {Component} from 'react';

export default class ContactForm extends Component {
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
      <form onSubmit={this.handleSubmit} className='row'>
        {!this.props.noTitle ? <h3 className="font-weight-bold mb-3 col-12">Get in touch</h3> : null}
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
    );
  }
}