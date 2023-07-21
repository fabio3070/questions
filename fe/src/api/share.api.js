import axios from 'axios';

const API_BASE_URL = 'https://private-anon-1e177898ec-blissrecruitmentapi.apiary-mock.com';//base url for all the fetch methods

//endpoints
export const shareScreen = ({destination_email, content_url}) => axios.post(`${API_BASE_URL}/share?destination_email=${destination_email}&content_url=${content_url}`);