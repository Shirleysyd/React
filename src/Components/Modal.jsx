const Modal = ({ isOpen, onClose, rating }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className='close-icon' onClick={onClose}>
          ×
        </button>
        <h2>Thank you for your feedback!</h2>
        <p>You rated us {rating} star{rating > 1 ? "s" : ""}</p>
      </div>
    </div>
  );
};

export default Modal;