import api from "../axios/axiosWrapper";

class TransactionService {
  // Метод для получения списка транзакций
  async gettransaction() {
    try {
      const response = await api.get("/transaction");
      return response.data;
    } catch (error) {
      console.error("Error while fetching transaction:", error);
      throw error;
    }
  }

  // Метод для создания новой транзакции
  async createTransaction(transaction) {
    try {
      const response = await api.post("/transaction", { transaction });
      return response.data;
    } catch (error) {
      console.error("Error while creating transaction:", error);
      throw error;
    }
  }

  // Метод для удаления транзакции
  async deleteTransaction(transactionId) {
    try {
      const response = await api.delete("/transaction", { transactionId });
      return response.data;
    } catch (error) {
      console.error("Error while deleting transaction:", error);
      throw error;
    }
  }
}

export default new transactionService();
