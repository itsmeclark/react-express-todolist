import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import '../assets/CSS/loginPage.css'

function LoginPage(){
    return (
        <>
            <form method='POST' className="main">
                <h1>LOGIN PAGE</h1>
                <label>Email</label>
                <input type="email" required/>
                <label>Password</label>
                <input type="password" required/><br/>
                <button type="submit">LOGIN</button>
            </form>
        </>
    )
}
export default LoginPage;