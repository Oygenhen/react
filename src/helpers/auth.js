import { makeRequest } from './api';

export const loginReq = async (data) => {
  return makeRequest('/login', 'POST', data);
};

export const logout = () => {
  const authToken = localStorage.getItem('auth');

  if (!authToken) return;

  localStorage.removeItem('auth');
};

export const signUp = async (data) => {
  return makeRequest('/sign-up', 'POST', data);
};
