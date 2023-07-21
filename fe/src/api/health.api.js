import axios from 'axios';

const API_BASE_URL = 'https://private-anon-1e177898ec-blissrecruitmentapi.apiary-mock.com';//base url for all the fetch methods

//endpoints
export const healthCheck = () => axios.get(`${API_BASE_URL}/health`);
