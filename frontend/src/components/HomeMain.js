import react from 'react';
import {MoveRight} from 'lucide-react';
import "./heromain.css";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function HomeMain() {
    const navigate = useNavigate();
    const {user} = useAuth();
    const HandleClick = () => {
        if(user) {
            navigate("/review");
        } else {
            navigate("/login");
        }
    }  
    return (
        <section className='Hero-section'>
            <div className='hero-section-container'>
                <div className='hero-main-title'>
                    <h1>Welcome to CodeIntel AI!</h1>
                </div>
                <div>
                    <p>CodeIntel AI — Your intelligent partner for writing, understanding, and perfecting code.</p>
                    <button onClick={HandleClick}>Get Started <MoveRight/></button>
                </div>
            </div>
        </section>
    )
}