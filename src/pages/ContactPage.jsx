import React, { Component } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import banner from "../assets/table.jpg";
import ContactForm from "../components/ContactForm";
import { SOCIAL_MEDIA } from "../services/Globals";

const CONTACTS = [
  { name: "General enquiries", email: "hello@tedxuwa.com" },
  { name: "President", email: "president@tedxuwa.com" },
  { name: "Speakers resources", email: "speakers@tedxuwa.com" },
  { name: "Sponsorship", email: "sponsorship@tedxuwa.com" },
  { name: "Media enquiries", email: "communications@tedxuwa.com" }
];

class ContactPage extends Component {
  componentDidMount() {
    document.title = "TEDxUWA | Contact us";
  }
  render() {
    return (
      <div className="about page">
        <PageHeader title="Contact Us" image={banner} />
        <div className="container">
          <div className="row">
            <div className="people-group col-12 py-4">
              <div className="row">
                {CONTACTS.map(contact => (
                  <div className="col-sm-6 col-md-4 mb-2">
                    <a
                      href={`mailto:${contact.email}`}
                      className="link-unset"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="card rounded-0 border-0 card-hover">
                        <div className="card-body">
                          <h4 className="card-title">{contact.name}</h4>
                          <p className="card-text text-muted">
                            {contact.email}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
                <div className="col-sm-6 col-md-4 pl-4 mb-2 d-flex align-items-center">
                  <div className="card border-0 d-flex flex-row align-items-center">
                    {SOCIAL_MEDIA.map(social => (
                      <a
                        href={social.link}
                        className="text-dark h4 mx-3"
                        key={social.name}
                      >
                        <i className={`fab fa-${social.icon}`} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 bg-light">
          <div className="container">
            <ContactForm />
          </div>
        </div>
        <hr />
        <div className="sponsor-group container py-4">
          <h3 className="font-weight-bold mb-2">Want to work with us?</h3>
          <p>
            You can help us make a difference by sponsoring TEDxUWA.&nbsp;&nbsp;
            <Link to="/sponsors">
              Find out how&nbsp;&nbsp;
              <i className="fas fa-arrow-right" />
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default ContactPage;
