import { API_CONFIG } from '../constants/config';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

class ApiService {
  private baseUrl: string;
  private timeout: number;

  constructor() {
    this.baseUrl = API_CONFIG.BASE_URL;
    this.timeout = API_CONFIG.TIMEOUT;
  }

  private async fetchWithTimeout(url: string, options?: RequestInit): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  async getUsers(): Promise<User[]> {
    try {
      const response = await this.fetchWithTimeout(`${this.baseUrl}${API_CONFIG.ENDPOINTS.USERS}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const users: User[] = await response.json();
      return users;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new Error('Failed to fetch users. Please try again later.');
    }
  }

  async getUser(id: number): Promise<User> {
    try {
      const response = await this.fetchWithTimeout(`${this.baseUrl}${API_CONFIG.ENDPOINTS.USERS}/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const user: User = await response.json();
      return user;
    } catch (error) {
      console.error(`Error fetching user ${id}:`, error);
      throw new Error('Failed to fetch user. Please try again later.');
    }
  }
}

export const apiService = new ApiService();
