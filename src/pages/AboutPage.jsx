import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import SpeakerRegistrationSection from '../components/SpeakerRegistrationSection';
import MemberCard from '../components/MemberCard';
import banner from '../assets/team.jpg';
import API from '../services/Api';

class AboutPage extends Component {
  state = {
    team: [],
    max: 4
  };
  componentDidMount() {
    API.GET('committee').then(data => {
      this.setState({ team: data.results });
    });
    document.title = 'TEDxUWA | About us';
  }
  showAll = () => this.setState({ max: this.state.team.length });
  render() {
    return (
      <div className="about page animate-fade-in-up">
        <PageHeader
          title="About Us"
          lead="We seek to find and share ideas from around the world and closer to home with the UWA community. We are students from the University of Western Australia, we are TEDxUWA."
          root="/about"
          image={banner}
        />
        <div className="container py-4 px-0">
          <div className="tedx-group col-md-8 mx-auto text-center">
            <h3 className="font-weight-bold mb-2">What is TEDx?</h3>
            <p className="text-justify text-center lead">
              In the spirit of ideas worth spreading, TED has created a program
              called TEDx. TEDx is a program of local, self-organized events
              that bring people together to share a TED-like experience. Our
              event is called TEDxUWA, where x = independently organized TED
              event.
            </p>
            <ul className="list-group list-group-flush mb-3 text-left d-inline-block" style={{ fontSize: '1.1rem' }}>
              <li className="list-group-item border-0 pl-0">
                <i className="fas fa-check text-primary mr-2"></i>
                <strong>Independently Organized:</strong> Self-organized events that adhere to TED's guidelines.
              </li>
              <li className="list-group-item border-0 pl-0">
                <i className="fas fa-check text-primary mr-2"></i>
                <strong>Deep Discussion:</strong> TEDTalks video and live speakers combine to spark connection.
              </li>
              <li className="list-group-item border-0 pl-0">
                <i className="fas fa-check text-primary mr-2"></i>
                <strong>Community Focused:</strong> Tailored specifically for the UWA community.
              </li>
            </ul>
          </div>
          <div className="tedx-group col-md-8 mx-auto mt-4 text-center">
            <h3 className="font-weight-bold mb-2">About TED</h3>
            <div>
              <p className="text-justify text-center lead">
                TED is a nonprofit organization devoted to Ideas Worth
                Spreading. Started as a four-day conference in California 30
                years ago, TED has grown to support its mission with multiple
                initiatives.
              </p>
              <ul className="list-group list-group-flush mb-3 text-left d-inline-block" style={{ fontSize: '1.1rem' }}>
                <li className="list-group-item border-0 pl-0">
                  <i className="fas fa-microphone text-primary mr-2"></i>
                  <strong>Annual Conferences:</strong> Leading thinkers and doers speak for 18 minutes or less.
                </li>
                <li className="list-group-item border-0 pl-0">
                  <i className="fas fa-globe text-primary mr-2"></i>
                  <strong>Global Reach:</strong> Talks are made available for free at TED.com.
                </li>
                <li className="list-group-item border-0 pl-0">
                  <i className="fas fa-star text-primary mr-2"></i>
                  <strong>Notable Speakers:</strong> Bill Gates, Jane Goodall, Sir Richard Branson, and many more.
                </li>
              </ul>
              <br />
              <h5 className="font-weight-bold">Key Initiatives</h5>
              <ul className="list-group list-group-flush text-left d-inline-block" style={{ fontSize: '1.1rem' }}>
                <li className="list-group-item border-0 pl-0">
                  <i className="fas fa-video text-primary mr-2"></i>
                  <strong>TED.com:</strong> New TED Talks posted daily.
                </li>
                <li className="list-group-item border-0 pl-0">
                  <i className="fas fa-language text-primary mr-2"></i>
                  <strong>Open Translation Project:</strong> Subtitles and interactive transcripts worldwide.
                </li>
                <li className="list-group-item border-0 pl-0">
                  <i className="fas fa-graduation-cap text-primary mr-2"></i>
                  <strong>TED-Ed:</strong> Educational videos and lessons.
                </li>
                <li className="list-group-item border-0 pl-0">
                  <i className="fas fa-award text-primary mr-2"></i>
                  <strong>TED Prize:</strong> Helping exceptional individuals translate wishes into action.
                </li>
                 <li className="list-group-item border-0 pl-0">
                  <i className="fas fa-users text-primary mr-2"></i>
                  <strong>TED Fellows:</strong> Amplifying the impact of world-changing innovators.
                </li>
              </ul>
              <br />
              <div className="alert alert-light border-left-primary d-inline-block mt-3 text-left" role="alert" style={{ borderLeft: '4px solid #E62B1E', maxWidth: '600px' }}>
                <span className="lead">
                  Follow TED on Twitter at&nbsp;
                  <a href="http://twitter.com/TEDTalks" className="font-weight-bold text-dark">
                    @TEDTalks
                  </a>
                  , or on Facebook at&nbsp;
                  <a href="http://www.facebook.com/TED" className="font-weight-bold text-dark">
                    Facebook.com/TED
                  </a>
                  .
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary text-white mission-group">
          <div className="py-5 container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="font-weight-bold mb-3">
                  Our <br />
                  Mission
                </h1>
              </div>
              <div className="col-md-6">
                <p className="lead mb-3">
                  TEDxUWA aims to spread good ideas among the UWA community;
                  creating a synergy of ideas between different faculties and
                  people.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-4 px-0">
          <div className="team-group col-sm-12">
            <h3 className="font-weight-bold mb-4">Meet the team</h3>
            <div className="row">
              {this.state.team.slice(0, this.state.max).map((member, index) => (
                <div
                  className="d-inline-block px-0 px-sm-2 col-6 col-md-4 col-lg-3 col-xl-3 mb-0 mb-sm-3"
                  key={index}
                >
                  <MemberCard data={member} />
                </div>
              ))}
            </div>
            <button
              className="btn btn-light text-dark mt-3 w-100"
              onClick={this.showAll}
              hidden={this.state.max === this.state.team.length}
            >
              Show all
            </button>
          </div>
        </div>
        <hr />
        <SpeakerRegistrationSection />
      </div>
    );
  }
}

export default AboutPage;
