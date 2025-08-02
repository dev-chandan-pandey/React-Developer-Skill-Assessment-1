// src/components/PropertyList.jsx
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties, onSelectProperty }) => {
  return (
    <div className="property-list">
      {properties.map(prop => (
        <PropertyCard key={prop.id} property={prop} onSelectProperty={onSelectProperty} />
      ))}
    </div>
  );
};

export default PropertyList;