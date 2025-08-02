// src/components/ViewDetailsModal.jsx
const ViewDetailsModal = ({ property, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <img src={property.imageUrl} alt={property.name} className="modal-image" />
        <h2>{property.name}</h2>
        <p><strong>Type:</strong> {property.type}</p>
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Price:</strong> ${property.price.toLocaleString()}</p>
        <p>{property.description}</p>
      </div>
    </div>
  );
};

export default ViewDetailsModal;