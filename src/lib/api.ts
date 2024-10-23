import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  register: (data: { username: string; email: string; password: string }) =>
    api.post('/auth/register', data),
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),
};

export const friends = {
  list: () => api.get('/friends'),
  sendRequest: (friendId: number) =>
    api.post('/friends/request', { friendId }),
  acceptRequest: (friendId: number) =>
    api.post('/friends/accept', { friendId }),
};

export const servers = {
  create: (data: { name: string; icon?: string }) =>
    api.post('/servers', data),
  list: () => api.get('/servers'),
  getChannels: (serverId: number) =>
    api.get(`/servers/${serverId}/channels`),
};

export default api;