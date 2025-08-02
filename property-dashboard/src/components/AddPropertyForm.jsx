// src/components/AddPropertyForm.jsx
import { useState } from 'react';

const AddPropertyForm = ({ onAddProperty }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: 'Plot',
    price: '',
    location: '',
    description: '',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef' // Default image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProperty({ ...formData, price: Number(formData.price) });
    // Reset form
    setFormData({ name: '', type: 'Plot', price: '', location: '', description: '', imageUrl: '...' });
  };

  return (
    <form onSubmit={handleSubmit} className="add-property-form">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Property Name" required />
      <select name="type" value={formData.type} onChange={handleChange}>
        <option value="Plot">Plot</option>
        <option value="Shed">Shed</option>
        <option value="Retail Store">Retail Store</option>
      </select>
      <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" required />
      <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPropertyForm;