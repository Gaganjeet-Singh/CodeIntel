import { useLocation } from 'react-router-dom';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProtectedRoute from "./components/ProtectedRoute";
import Review from './Pages/Review';
import HomePage from './Pages/HomePage';
import Profile from './Pages/Profile';
import Navbar from './components/Navbar';
import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();

  const hideNavbar = location.pathname === '/review'; 
  return (
    <>
      {!hideNavbar && <Navbar/>}
      <ToastContainer position="top-center"/>
      <Routes>
        <Route path = "/" element = {<HomePage/>} />
        <Route path= "/login" element = {<Login/>} />
        <Route path = "/register" element = {<Register/>}/>
        <Route path = "/me" element = {
          <ProtectedRoute>
            <Profile/>
          </ProtectedRoute>
        }/>
        <Route
          path="/review"
          element={
            <ProtectedRoute>
              <Review />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
