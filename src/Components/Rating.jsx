import { useState } from 'react';
import Star from './star';
import Modal from './Modal';

const Rating = (props) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const stars = Array(5)
    .fill(0)
    .map((_, i) => i + 1); // Array of 6 stars
  const feedbackMessages = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };
  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  };

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
          ratingClick={() => setRating(star)}
          ratingMouseEnter={() => setHover(star)}
          ratingMouseLeave={() => setHover(0)}/>
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
        <div className="feedback" >
          <p>{feedbackMessages[rating - 1]}</p>
          <button 
            className='submit-btn'
            onClick={handleSubmit}
            disabled={rating === 0 }>Submit
          </button>
          <Modal
            isOpen={submitted}
            onClose={closeModal}
            rating={rating}
          />
        </div>
      )}
    </div>
  );
};

export default Rating;
