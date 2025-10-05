const Star = ({ star, rating, hover, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <span
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`star ${star <= (hover || rating) ? 'active' : ''}`}
    >
      {'\u2605'}
    </span>
  );
};


export default Star;