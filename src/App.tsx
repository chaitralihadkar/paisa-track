import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import UserPortal from "./pages/UserPortal";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import AddIncome from "./components/AddIncome";
import AddExpense from "./components/AddExpense";
import MyProfile from "./pages/MyProfile";
import EditProfile from "./components/EditProfile";
import Profile from "./components/Profile";
import Reports from "./pages/Reports";
import PracticeOverlay from "./pages/PracticeOverlay";
import UpdateExpense from "./components/UpdateExpense";

function App() {
  return (
    <>
    
    {/* bg-blue-100 */}
      <div className="bg-blue-100 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-portal" element={<UserPortal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/transactions" element={<Transactions/>}/>

          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile" element={<Profile />} /> 
        </Routes>
      </div> 
    </>
  );
}

export default App;
