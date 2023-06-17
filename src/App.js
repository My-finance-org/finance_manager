import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {PrivateRoute, PublicRoute} from "./router";
import Home from './pages/Home'
import Goals from './pages/Goals'
import Bills from './pages/Bills'
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Balances from "./pages/Balances";
import Expenses from "./pages/Expenses";
import Settings from "./pages/Settings";
import Transactions from "./pages/Transactions";
import Balance from './pages/Balance';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.App}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrivateRoute element={<Home />} />} />
            <Route path="/login" element={<PublicRoute restricted={false} element={<SignIn/>} />} />
            <Route path="/signup" element={<PublicRoute restricted={false} element={<SignUp />} />} />
            <Route path="/balances" element={<PrivateRoute element={<Balances />} />} />
            <Route path="/balances/:id" element={<PrivateRoute element={<Balance />} />} />
            <Route path="/transactions" element={<PrivateRoute element={<Transactions />} />} />
            <Route path="/bills" element={<PrivateRoute element={<Bills />} />} />
            <Route path="/expenses" element={<PrivateRoute element={<Expenses />} />} />
            <Route path="/goals" element={<PrivateRoute element={<Goals />} />} />
            <Route path="/settings" element={<PrivateRoute element={<Settings />} />} />
            <Route path="*" element={<p>NotFound</p>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
