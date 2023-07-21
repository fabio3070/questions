import axios from 'axios';

const API_BASE_URL = 'https://private-anon-1e177898ec-blissrecruitmentapi.apiary-mock.com';//base url for all the fetch methods

//endpoints
export const getQuestions = ({filter, offset, limit}) => axios.get(`${API_BASE_URL}/questions?limit=${limit}&offset=${offset}&filter=${filter}`);
export const getQuestionById = (id) => axios.get(`${API_BASE_URL}/questions/${id}`);
export const updateQuestionById = (id, body) => axios.put(`${API_BASE_URL}/questions/${id}`, body);
