// FinanceService.js

class FinanceService {
  // Метод для получения списка транзакций
  async getTransactions() {
    try {
      const response = await api.get('/transactions')
      return response.data;
    } catch (error) {
      console.error('Error while fetching transactions:', error);
      throw error;
    }
  }

  // Метод для создания новой транзакции
  async createTransaction(transaction) {
    try {
      const response = await api.post('/transactions', { transaction })
      return response.data;
    } catch (error) {
      console.error('Error while creating transaction:', error);
      throw error;
    }
  }

  // Метод для удаления транзакции
  async deleteTransaction(transactionId) {
    try {
      const response = await api.delete('/transactions', { transactionId })
      return response.data;
    } catch (error) {
      console.error('Error while deleting transaction:', error);
      throw error;
    }
  }
}

export default new FinanceService();
