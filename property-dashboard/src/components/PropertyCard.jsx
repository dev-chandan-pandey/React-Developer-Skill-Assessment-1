// src/components/PropertyCard.jsx
const PropertyCard = ({ property, onSelectProperty }) => {
  return (
    <div className="property-card">
      <h3>{property.name}</h3>
      <p><strong>Type:</strong> {property.type}</p>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Price:</strong> ${property.price.toLocaleString()}</p>
      <button onClick={() => onSelectProperty(property)}>View</button>
    </div>
  );
};

export default PropertyCard;