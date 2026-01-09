
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProtectedRoute from "./components/ProtectedRoute";
import Review from './Pages/Review';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/login" element = {<Login/>} />
        <Route path = "/register" element = {<Register/>}/>
        <Route
          path="/review"
          element={
            <ProtectedRoute>
              <Review />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
