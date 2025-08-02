// src/App.jsx
import { useState, useEffect, useMemo } from 'react';
import * as api from './services/api';
import PropertyList from './components/PropertyList';
import FilterBar from './components/FilterBar';
import AddPropertyForm from './components/AddPropertyForm';
import ViewDetailsModal from './components/ViewDetailsModal';
import './App.css';
import { useTransition } from 'react';

function App() {
  const [properties, setProperties] = useState([]);
  const [filterType, setFilterType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showForm,setShowForm]= useState(false);
  const fetchProperties = () => {
    api.getProperties()
      .then(response => setProperties(response.data))
      .catch(error => console.error("Error fetching properties:", error));
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleAddProperty = async (propertyData) => {
    await api.addProperty(propertyData);
    fetchProperties(); // Refetch to update the list
    setShowForm(false);
  };

  const filteredProperties = useMemo(() => {
    return properties.filter(prop => {
      const matchesType = filterType ? prop.type === filterType : true;
      const matchesSearch = searchTerm ?
        prop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prop.location.toLowerCase().includes(searchTerm.toLowerCase()) : true;
      return matchesType && matchesSearch;
    });
  }, [properties, filterType, searchTerm]);

  return (
    <div className="dashboard-container">
      <header>
        <h1>Mini Property Listing Dashboard</h1>
        <button onClick={() => { /* Logic to show Add form */
           if(showForm){
            setShowForm(false);
           }
           setShowForm(true);
         }}>Add Property</button>
      </header>

      <FilterBar
        filterType={filterType}
        setFilterType={setFilterType}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        propertyTypes={[...new Set(properties.map(p => p.type))]}
      />

      <div className="main-content">
        <div className="listings-section">
          <h2>Property Listings</h2>
          <PropertyList properties={filteredProperties} onSelectProperty={setSelectedProperty} />
        </div>
        <div className="form-section">
          <h2>Add Property</h2>
           {showForm&& (
        <AddPropertyForm onAddProperty={handleAddProperty} />
      )}
         
        </div>
      </div>
      
      {selectedProperty && (
        <ViewDetailsModal 
          property={selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
        />
      )}
    </div>
  );
}

export default App;