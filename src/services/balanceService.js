import api from "../axios/axiosWrapper";

class BalanceService {
  // Метод для получения списка транзакций
  async getBalance() {
    try {
      const response = await api.get("/balance");
      return response.data;
    } catch (error) {
      console.error("Error while fetching balance:", error);
      throw error;
    }
  }

  // Метод для создания новой транзакции
  async createBalance(balance) {
    try {
      const response = await api.post("/balance", { balance });
      return response.data;
    } catch (error) {
      console.error("Error while creating balance:", error);
      throw error;
    }
  }

  // Метод для удаления транзакции
  async deleteBalance(balanceId) {
    try {
      const response = await api.delete("/balance", { balanceId });
      return response.data;
    } catch (error) {
      console.error("Error while deleting balance:", error);
      throw error;
    }
  }
}

export default new BalanceService();
