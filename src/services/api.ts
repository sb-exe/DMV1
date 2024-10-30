import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth endpoints
export const auth = {
  login: (credentials: { email: string; password: string }) => 
    api.post('/auth/login', credentials),
  register: (userData: { name: string; email: string; password: string }) =>
    api.post('/auth/register', userData),
  forgotPassword: (email: string) => 
    api.post('/auth/forgot-password', { email }),
  resetPassword: (token: string, password: string) =>
    api.post('/auth/reset-password', { token, password })
};

// Lead endpoints
export const leads = {
  getAll: (params?: any) => 
    api.get('/leads', { params }),
  getById: (id: string) => 
    api.get(`/leads/${id}`),
  create: (leadData: any) => 
    api.post('/leads', leadData),
  update: (id: string, leadData: any) => 
    api.put(`/leads/${id}`, leadData),
  delete: (id: string) => 
    api.delete(`/leads/${id}`),
  addActivity: (id: string, activityData: any) =>
    api.post(`/leads/${id}/activity`, activityData)
};

// Campaign endpoints
export const campaigns = {
  getAll: (params?: any) => 
    api.get('/campaigns', { params }),
  getById: (id: string) => 
    api.get(`/campaigns/${id}`),
  create: (campaignData: any) => 
    api.post('/campaigns', campaignData),
  update: (id: string, campaignData: any) => 
    api.put(`/campaigns/${id}`, campaignData),
  delete: (id: string) => 
    api.delete(`/campaigns/${id}`)
};

// Call endpoints
export const calls = {
  getAll: (params?: any) => 
    api.get('/calls', { params }),
  getById: (id: string) => 
    api.get(`/calls/${id}`),
  create: (callData: any) => 
    api.post('/calls', callData),
  update: (id: string, callData: any) => 
    api.put(`/calls/${id}`, callData),
  delete: (id: string) => 
    api.delete(`/calls/${id}`)
};

// Message endpoints
export const messages = {
  getAll: (params?: any) => 
    api.get('/messages', { params }),
  getById: (id: string) => 
    api.get(`/messages/${id}`),
  create: (messageData: any) => 
    api.post('/messages', messageData),
  update: (id: string, messageData: any) => 
    api.put(`/messages/${id}`, messageData),
  delete: (id: string) => 
    api.delete(`/messages/${id}`)
};

// Report endpoints
export const reports = {
  getLeadStats: (params?: any) => 
    api.get('/reports/leads', { params }),
  getCampaignStats: (params?: any) => 
    api.get('/reports/campaigns', { params }),
  getCallStats: (params?: any) => 
    api.get('/reports/calls', { params }),
  getCustomReport: (reportConfig: any) => 
    api.post('/reports/custom', reportConfig)
};

export default {
  auth,
  leads,
  campaigns,
  calls,
  messages,
  reports
};