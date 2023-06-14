import api from "../axios/axiosWrapper";

class AuthService {
  async login(email, password) {
    try {
      const response = await api.post('/login', { email, password });
      // Успешная авторизация
      console.log('Успешная авторизация:', response.data);
    } catch (error) {
      // Ошибка авторизации
      console.error('Ошибка авторизации:', error);
    }
  }

  async signOut() {
    try {
      const response = await api.post('/signout');
      // Успешный выход из аккаунта
      console.log('Успешный выход из аккаунта:', response.data);

      if (response.ok) {
        // Очистить данные аутентификации после успешного выхода
        localStorage.removeItem('token');
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      // Ошибка при выходе из аккаунта
      console.error('Ошибка при выходе из аккаунта:', error);
    }
  }

  async authWithToken(token) {
    try {
      const response = await api.post('/auth', { token });
      // Успешная авторизация по токену
      console.log('Успешная авторизация по токену:', response.data);
    } catch (error) {
      // Ошибка авторизации по токену
      console.error('Ошибка авторизации по токену:', error);
    }
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');
    return !!token;
  }
}

export default new AuthService();