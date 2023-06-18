import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import balancesSlice from "./BalancesSlice";
import financeSlice from "./FinanceSlice";
import goalsSlice from "./GoalsSlice";
import settingsSlice from "./SettingsSlice";
import transactionsSlice from "./TransactionSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    balances: balancesSlice.reducer,
    finance: financeSlice.reducer,
    goals: goalsSlice.reducer,
    settings: settingsSlice.reducer,
    transaction: transactionsSlice.reducer,
  },
});

export default store;
