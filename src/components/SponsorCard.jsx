import React from "react";

const getTierSpec = tier => {
  switch (tier) {
    case 1:
      return { padding: 1, heading: 4, showDesc: true, showLink: true };
    case 2:
      return { padding: 3, heading: 5, showDesc: true, showLink: false };
    case 3:
      return { padding: 4, heading: 5, showDesc: false, showLink: false };
    default:
      return { padding: 4, heading: 5, showDesc: false, showLink: false };
  }
};

export default ({ sponsor }) => {
  const { name, description, logo_image, tier, link } = sponsor;
  const { padding, heading, showDesc, showLink } = getTierSpec(tier);
  return (
    <div className="col-sm-6 col-md-4 card border-0 text-center">
      <img
        src={logo_image}
        alt={name}
        className={`card-img-top p-${padding}`}
      />
      <div className="card-body p-1 pt-3">
        <h3 className={`h${heading} font-weight-bold`}>{name}</h3>
        {showDesc && description && <p className="mb2-2">{description}</p>}
        {showLink && link && (
          <a target="_blank" rel="noopener noreferrer" href={link}>
            Visit website
          </a>
        )}
      </div>
    </div>
  );
};
