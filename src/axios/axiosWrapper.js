import axios from 'axios';

class AxiosWrapper {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BASE_API_URL
    });
  }

  async get(url, config) {
    try {
      const response = await this.api.get(url, config);
      return response.data;
    } catch (error) {
      // Обработка ошибок
      throw error;
    }
  }

  async post(url, data, config) {
    try {
      const response = await this.api.post(url, data, config);
      return response.data;
    } catch (error) {
      // Обработка ошибок
      throw error;
    }
  }

  async put(url, data, config) {
    try {
      const response = await this.api.put(url, data, config);
      return response.data;
    } catch (error) {
      // Обработка ошибок
      throw error;
    }
  }

  async delete(url, config) {
    try {
      const response = await this.api.delete(url, config);
      return response.data;
    } catch (error) {
      // Обработка ошибок
      throw error;
    }
  }
}

const api = new AxiosWrapper();

export default api;