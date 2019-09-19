import React from 'react'

const getTierSpec = tier => {
  switch (tier) {
    case 1:
      return { padding: 1, heading: 4 }
    case 2:
      return { padding: 3, heading: 5 }
    case 3:
      return { padding: 4, heading: 5 }
    default:
      return { padding: 4, heading: 5 }
  }
}

export default ({ sponsor }) => {
  const { name, logo_image, tier, link } = sponsor
  const { padding, heading } = getTierSpec(tier)
  return (
    <>
      <img
        src={logo_image}
        alt={name}
        className={`card-img-top p-${padding}`}
      />
      <div className="card-body p-1 pt-3">
        <h3 className={`h${heading} font-weight-bold`}>{name}</h3>
        {link && (
          <a target="_blank" rel="noopener noreferrer" href={link}>
            Visit website
          </a>
        )}
      </div>
    </>
  )
}
