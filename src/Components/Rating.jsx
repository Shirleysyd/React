import { useState } from 'react';
import Star from './star'; 

const Rating = (props) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = Array(5)
    .fill(0)
    .map((_, i) => i + 1); // Array of 6 stars
  const feedbackMessages = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
  return (
    <div className="container">
      <h2>{props.heading}</h2>
      <div>
        {stars.map((star) => (
          <Star 
          key={star} 
          star={star}
          rating={rating}
          hover={hover}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}/>
          // <span
          //   onClick={() => setRating(star)}
          //   onMouseEnter={() => setHover(star)}
          //   onMouseLeave={() => setHover(0)}
          //   key={star}
          //   className={`star ${star <= (hover || rating) ? 'active' : ''}`}
          // >
          //   {'\u2605'}
          // </span>
        ))}
      </div>
      {rating > 0 && (
        <div className="feedback">
          {feedbackMessages[rating - 1]}
        </div>
      )}
    </div>
  );
};

export default Rating;
