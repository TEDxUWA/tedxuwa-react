import React, { Component } from 'react';
import Media from "react-media";
import "../css/MemberCard.css";

class MemberCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
  }
  toggleDetails = () => this.setState({showDetails: !this.state.showDetails});
  render() {
    const member = this.props.data;
    return (
      <Media query='(max-width: 768px)'>
      {match => 
        <div className="card border-white member rounded-0" onMouseOver={this.toggleDetails} onMouseOut={this.toggleDetails} onClick={this.toggleDetails}>
          <img src={member.image} alt={member.name} className={`rounded-0 card-img${match ? '-top' : ''}`}/>
          <div className={`${!match ? 'card-img-overlay text-white': 'text-center'} animation-fade card-body rounded`} hidden={!match && !this.state.showDetails}>
            <div className="bottom-stuck">
              <h4 className="card-title mb-0 font-weight-bold">{member.name}</h4>
              <p className="card-text">{member.position}</p>
              <div className="links-group" hidden={!member.links}>
                <ul className="list-unstyled list-inline">
                  {member.links.map(link => (
                    <li className="list-inline-item" key={link.url}>
                      <a href={link.url} className={`${!match ? 'text-white' : 'text-dark'}`}><i className={link.icon}/></a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      }
      </Media>
    );
  }
}

export default MemberCard;