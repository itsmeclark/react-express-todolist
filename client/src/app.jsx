import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import LoginPage from './pages/loginPage.jsx';
import RegisterPage from './pages/registerPage.jsx';
import LandingPage from './pages/landingPage.jsx';
import HomePage from './pages/home.jsx';

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}></Route>
                <Route path='/auth/login' element={<LoginPage/>}></Route>
                <Route path='/auth/regis' element={<RegisterPage/>}></Route>
                <Route path='/home' element={<HomePage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;