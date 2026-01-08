
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProtectedRoute from "./components/ProtectedRoute";


function Dashboard() {
  return <h1>Dashboard (Protected)</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/login" element = {<Login/>} />
        <Route path = "/register" element = {<Register/>}/>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
