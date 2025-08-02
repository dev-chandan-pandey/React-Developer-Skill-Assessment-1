// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/properties';

export const getProperties = () => axios.get(API_URL);
export const addProperty = (property) => axios.post(API_URL, property);