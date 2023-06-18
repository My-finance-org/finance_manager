import api from "../axios/axiosWrapper";

class GoalsService {
  // Метод для получения списка транзакций
  async getGoals() {
    try {
      const response = await api.get("/goals");
      return response.data;
    } catch (error) {
      console.error("Error while fetching goalss:", error);
      throw error;
    }
  }

  // Метод для создания новой транзакции
  async createGoals(goals) {
    try {
      const response = await api.post("/goals", { goals });
      return response.data;
    } catch (error) {
      console.error("Error while creating goals:", error);
      throw error;
    }
  }

  // Метод для удаления транзакции
  async deleteGoals(goalsId) {
    try {
      const response = await api.delete("/goals", { goalsId });
      return response.data;
    } catch (error) {
      console.error("Error while deleting goals:", error);
      throw error;
    }
  }
}

export default new GoalsService();
