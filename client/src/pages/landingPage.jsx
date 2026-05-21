import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import LoginPage from './loginPage.jsx';
import RegisterPage from './registerPage.jsx';
import '../assets/CSS/landingPage.css'

function LandingPage(){
    return (
        <>
        <header>
            <div className='auth-btn'>
                <Link to='/auth/login'><button className='login-btn'>LOGIN</button></Link>
                <Link to='/auth/regis'><button className='start-btn'>GET STARTED <i class="fa-solid fa-circle-arrow-right"></i></button></Link>
            </div>
        </header>
        <div className="main">
            
        </div>
        </>
    )
}

export default LandingPage;