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
      <div className="about page">
        <PageHeader
          title="About Us"
          lead="We seek to find and share ideas from arround the world and closer to home with the UWA community. We are students from the University of Western Australia, we are TEDxUWA."
          root="/about"
          image={banner}
        />
        <div className="container py-4 px-0">
          <div className="tedx-group col-md-7">
            <h3 className="font-weight-bold mb-2">What is TEDx</h3>
            <p className="text-justify">
              In the spirit of ideas worth spreading, TED has created a program
              called TEDx. TEDx is a program of local, self-organized events
              that bring people together to share a TED-like experience. Our
              event is called TEDxUWA, where x = independently organized TED
              event. At our TEDxUWA event, TEDTalks video and live speakers will
              combine to spark deep discussion and connection in a small group.
              The TED Conference provides general guidance for the TEDx program,
              but individual TEDx events, including ours, are self-organized.
            </p>
          </div>
          <div className="tedx-group col-md-7 mt-4">
            <h3 className="font-weight-bold mb-2">About TED</h3>
            <div>
              <p className="text-justify">
                TED is a nonprofit organization devoted to Ideas Worth
                Spreading. Started as a four-day conference in California 30
                years ago, TED has grown to support its mission with multiple
                initiatives. The two annual TED Conferences invite the world's
                leading thinkers and doers to speak for 18 minutes or less. Many
                of these talks are then made available, free, at TED.com. TED
                speakers have included Bill Gates, Jane Goodall, Elizabeth
                Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck,
                Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
              </p>
              <br />
              <p className="text-justify">
                The annual TED Conference takes place each spring in Vancouver,
                British Columbia. TED's media initiatives include TED.com, where
                new TED Talks are posted daily; the Open Translation Project,
                which provides subtitles and interactive transcripts as well as
                translations from volunteers worldwide; the educational
                initiative TED-Ed. TED has established the annual TED Prize,
                where exceptional individuals with a wish to change the world
                get help translating their wishes into action; TEDx, which
                supports individuals or groups in hosting local, self- organized
                TED-style events around the world, and the TED Fellows program,
                helping world-changing innovators from around the globe to
                amplify the impact of their remarkable projects and activities.
              </p>
              <br />
              <span className="text-left">
                Follow TED on Twitter at&nbsp;
                <a href="http://twitter.com/TEDTalks">
                  http://twitter.com/TEDTalks
                </a>, or on Facebook at&nbsp;
                <a href="http://www.facebook.com/TED">
                  http://www.facebook.com/TED
                </a>.
              </span>
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
                  TEDxUWA aims to spread good ideas among the UWA community.
                  Creating a synergy of ideas between different disciplines and
                  people
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
