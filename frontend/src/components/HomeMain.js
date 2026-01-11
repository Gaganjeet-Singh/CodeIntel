import react from 'react';
import {MoveRight} from 'lucide-react';
import "./heromain.css";
export default function HomeMain() {
    return (
        <section className='Hero-section'>
            <div className='hero-section-container'>
                <div className='hero-main-title'>
                    <h1>Welcome to CodeIntel AI!</h1>
                </div>
                <div>
                    <p>CodeIntel AI — Your intelligent partner for writing, understanding, and perfecting code.</p>
                    <button>Get Started <MoveRight/></button>
                </div>
            </div>
        </section>
    )
}