import React from 'react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const remainder = (rating - fullStars) * 100;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <div key={i} style={{ position: 'relative', display: 'inline-block' }}>
        <i className="fas fa-star" style={{ color: 'grey' }}></i>
        <div style={{ position: 'absolute', top: '0', left: '0', overflow: 'hidden', width: '100%' }}>
          <i className="fas fa-star" style={{ color: 'gold' }}></i>
        </div>
      </div>
    );
  }

  if (remainder > 0) {
    stars.push(
      <div key={fullStars} style={{ position: 'relative', display: 'inline-block' }}>
        <i className="fas fa-star" style={{ color: 'grey' }}></i>
        <div style={{ position: 'absolute', top: '0', left: '0', overflow: 'hidden', width: `${remainder}%` }}>
          <i className="fas fa-star" style={{ color: 'gold' }}></i>
        </div>
      </div>
    );
  }const startGrey = remainder > 0 ? fullStars + 1 : fullStars;
  for (let i = startGrey; i < 5; i++) {
    stars.push(
      <div key={i} style={{ position: 'relative', display: 'inline-block' }}>
        <i className="fas fa-star" style={{ color: 'grey' }}></i>
        <div style={{ position: 'absolute', top: '0', left: '0', overflow: 'hidden', width: '0%' }}>
          <i className="fas fa-star" style={{ color: 'gold' }}></i>
        </div>
      </div>
    );
  }

  const lastStarIndex = stars.length - 1;
  const lastStarStyle = stars[lastStarIndex].props.style;
  stars[lastStarIndex] = React.cloneElement(stars[lastStarIndex], {
    style: { ...lastStarStyle, marginRight: '8px' }
  });

  return <div style={{ display: 'inline-flex' }}>{stars}{rating}</div>;
};

export default StarRating;
