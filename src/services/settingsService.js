import api from "../axios/axiosWrapper";

class SettingsService {
  // Метод для получения списка транзакций
  async getSettings() {
    try {
      const response = await api.get("/settings");
      return response.data;
    } catch (error) {
      console.error("Error while fetching settings:", error);
      throw error;
    }
  }

  // Метод для создания новой транзакции
  async createSettings(settings) {
    try {
      const response = await api.post("/settings", { settings });
      return response.data;
    } catch (error) {
      console.error("Error while creating settings:", error);
      throw error;
    }
  }

  // Метод для удаления транзакции
  async deleteSettings(settingsId) {
    try {
      const response = await api.delete("/settings", { settingsId });
      return response.data;
    } catch (error) {
      console.error("Error while deleting settings:", error);
      throw error;
    }
  }
}

export default new SettingsService();
