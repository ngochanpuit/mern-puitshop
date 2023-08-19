import React from 'react';

export default function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="rating">
      <span>
        <i
          className={
            rating >= 1
              ? 'fas fa-star'
              : rating >= 0.5
              ? 'fas fas-star-half=alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>{numReviews}</span>
    </div>
  );
}
