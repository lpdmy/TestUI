import axios from 'axios';

// Create an instance of Axios
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // This is the key. Axios will prepend this to all requests.
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getEnvironmentConfig = async () => {
  try {
    const response = await apiClient.get(`/ConfigTest/show2`);
    return response.data;
  } catch (error) {
    console.error('Error fetching config data:', error);
    throw error;
  }
};