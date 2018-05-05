import React from 'react';
import { Link } from "react-router-dom";
import slugify from "slugify";
import dayjs from 'dayjs';

const EventCard = ({ data }) => {
  const start = dayjs(data.start).format('dddd, D MMMM YYYY');
  return (
    <Link to={`/events/${data.id}/${slugify(data.name, { lower: true })}`} className='link-unset'>
      <div className="event card rounded-0 card-hover">
        <img src={data.banner_image} alt={data.name} className="card-img-top img-fluid rounded-0" style={{ maxHeight: '200px' }} />
        <div className="card-img-overlay" style={{ maxHeight: '200px' }}>
          <span className="badge badge-dark text-uppercase">{data.event_type}</span>
        </div>
        <div className="card-body">
          <h4 className="card-title text-dark">{data.name}</h4>
          <p className="card-text text-muted">{data.location}</p>
          <p className="card-text text-muted mb-2">{start}</p>
          <p className="text-primary">Learn more</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;