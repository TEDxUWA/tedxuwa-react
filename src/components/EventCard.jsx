import React from 'react';
import {Link} from "react-router-dom";
import slugify from "slugify";

const EventCard = ({data}) => {
  return (
    <div className="event card rounded-0">
      <img src={data.image} alt={data.title} className="card-img-top img-fluid rounded-0" style={{maxHeight: '200px'}}/>
      <div className="card-img-overlay" style={{maxHeight: '200px'}}>
        <span className="badge badge-dark text-uppercase">{data.type}</span>
      </div>
      <div className="card-body">
        <h4 className="card-title">{data.title}</h4>
        <p className="card-text text-muted">{data.location}</p>
        <p className="card-text text-muted mb-2">{data.date}</p>
        <Link to={`/events/${slugify(data.title, {lower: true})}`}>Learn more</Link>
      </div>
    </div>
  );
};

export default EventCard;