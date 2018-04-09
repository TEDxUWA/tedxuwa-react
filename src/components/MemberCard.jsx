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
  toggleDetails = () => this.setState({ showDetails: !this.state.showDetails });
  getInitials = (name) => name.split(' ').map(part => part.split('')[0]).join('');
  render() {
    const member = this.props.data;
    return (
      <Media query='(max-width: 768px)'>
        {match =>
          <div className="card border-0 member" onMouseOver={this.toggleDetails} onMouseOut={this.toggleDetails}>
            <div className="photo-group">
              {member.image
                ? <img src={member.image} alt={member.name} className={`card-img${match ? '-top' : ''}`} />
                : <h1 className="display-1 font-weight-bold m-auto photo-placeholder">{this.getInitials(member.name)}</h1>
              }
            </div>
            <div
              className={`${!match ? 'card-img-overlay text-white' : 'text-center text-dark'} animation-fade card-body rounded py-0 px-3`}
              hidden={!match && !this.state.showDetails}
            >
              <div className="bottom-stuck py-3 rounded-bottom">
                <h4 className="card-title mb-0 font-weight-bold">{member.name}</h4>
                <p className="card-text">{member.position}</p>
                {member.links ?
                  <div className="links-group">
                    <ul className="list-unstyled list-inline">
                      {member.links.map(link => (
                        <li className="list-inline-item" key={link.url}>
                          <a href={link.url} target='_blank' rel='noopener noreferrer' className={`${!match ? 'text-white' : 'text-dark'}`}><i className={link.icon} /></a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  : null}
              </div>
            </div>
          </div>
        }
      </Media>
    );
  }
}

// class MemberCard extends Component {
//   render() {
//     const { data } = this.props;
//     return (
//       <div className="member card container py-2">
//         <div className="row">
//           <div className="col-md-5 pr-0">
//             <div className="member-photo rounded-circle" style={{
//               backgroundImage: `url(${data.image})`
//             }}></div>  
//           </div>  
//           <div className="col-md-7">
//             <h4 className="font-weight-bold">{data.name}</h4>
//             <p>{data.position}</p>
//             {data.links ?
//               <div className="links-group">
//                 <ul className="list-unstyled list-inline">
//                   {data.links.map(link => (
//                     <li className="list-inline-item" key={link.url}>
//                       <a href={link.url} target='_blank' rel='noopener noreferrer' className='text-dark'><i className={link.icon} /></a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             : null}  
//           </div>
//         </div>  
//       </div>
//     );
//   }
// }

export default MemberCard;