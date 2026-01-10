import react from 'react';
import{Link,useNavigate} from 'react-router-dom';
import "./navbar.css";
export default function Navbar() {

    const navigate = useNavigate();

    const HandleClick = () => {
        navigate('/register');
    }
    return (
        <nav className='navbar'>
            <div className='logo'>
                <p>CodeIntel AI</p>
            </div>
            <div className='nav-links'>
                <Link to = 'Login'>Login</Link>
                <button className='nav-btn' onClick={HandleClick}>Register</button>
            </div>
        </nav>
    )
}