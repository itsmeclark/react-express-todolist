import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import LoginPage from './pages/loginPage.jsx';
import RegisterPage from './pages/registerPage.jsx';
import LandingPage from './pages/landingPage.jsx';

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}></Route>
                <Route path='/auth/login' element={<LoginPage/>}></Route>
                <Route path='/auth/regis' element={<RegisterPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;