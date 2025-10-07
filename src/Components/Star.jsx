const Star = ({ star, rating, hover, ratingClick, ratingMouseEnter, ratingMouseLeave }) => {
  return (
    <span
      onClick={()=>ratingClick(star)}
      onMouseEnter={()=>ratingMouseEnter(star)}
      onMouseLeave={()=>ratingMouseLeave(star)}
      className={`star ${star <= (hover || rating) ? 'active' : ''}`}
    >
      {'\u2605'}
    </span>
  );
};


export default Star;