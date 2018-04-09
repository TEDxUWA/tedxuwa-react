import React, {Component} from "react";
import PageHeader from "../components/PageHeader";
import SpeakerRegistrationSection from "../components/SpeakerRegistrationSection";
import MemberCard from "../components/MemberCard";
import banner from '../assets/team.jpg';
import TEAM from '../teamMembers.json';

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: TEAM,
      max: 50
    };
  }
  showAll = () => this.setState({max: this.state.team.length});
  render() {
    return (
      <div className="about page">
        <PageHeader title="About Us" lead="We seek to find and share ideas from arround the world and closer to home with the UWA community. We are students from the University of Western Australia , we are TEDxUWA." root='/about' image={banner}/>
        <div className="container py-4 px-0">
            <div className="tedx-group col-md-7">
              <h3 className="font-weight-bold mb-2">What is TEDx</h3>
              <p className='text-justify'>In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxUWA, where x = independently organized TED event. At our TEDxUWA event, TEDTalks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.</p>
            </div>
        </div>
        <hr/>
        <div className="container py-4 px-0">
          <div className="team-group col-sm-12">
            <h3 className="font-weight-bold mb-4">Meet the team</h3>
            <div className="row">
              {this.state.team.slice(0, this.state.max).map((member, index) => (
                <div className="d-inline-block px-0 px-sm-2 col-6 col-md-4 col-lg-3 col-xl-3 mb-0 mb-sm-3" key={index}>
                  <MemberCard data={member}/>
                </div>
              ))}
            </div>
            <button className="btn btn-light text-dark mt-3 w-100" onClick={this.showAll} hidden={this.state.max === this.state.team.length}>Show all</button>
          </div>
        </div>
        <hr/>
        <SpeakerRegistrationSection />
      </div>
    );
  }
}

export default AboutPage;