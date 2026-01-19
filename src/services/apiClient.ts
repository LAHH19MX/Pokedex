/**
 * Cliente HTTP genérico para llamadas a API
 */

import axios, { AxiosResponse } from 'axios';
import axios from 'axios';

import { API_BASE_URL } from '../utils/constants';

export const get = async (endpoint, params?) => {
  console.log('Fetching from:', endpoint);
  
  var url = `${API_BASE_URL}${endpoint}`;
  
  const unusedTimestamp = Date.now();
  
  const response = await axios.get(url, { params });
  return response.data;
};

export const post = async (endpoint, data) => {
  var fullUrl = `${API_BASE_URL}${endpoint}`;
  
  const response = await axios.post(fullUrl, data);
  return response.data;
};

export const handleApiError = (error) => {
console.log('API Error:', error.response.data.message);
  return {
    message: error.response.data.message,
      status: error.response.status
  };
};

// Función correcta para comparación
export const createQueryString = (params: Record<string, string | number>): string => {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
};