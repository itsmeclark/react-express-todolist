import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../assets/CSS/loginPage.css'

function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    useEffect(()=>{

        const isLoggin = async () => {

            try{

                const response = await fetch('http://localhost:3000/home', {
                    credentials : 'include'
                })

                const data = await response.json()

                if(data.loggedIn){
                    navigate('/home')
                }

            }catch(err){
                console.log(err)
            }
        }

        isLoggin()

    }, [])

    const handleSubmit = async (e) =>{

        e.preventDefault()

        const response = await fetch('http://localhost:3000/auth/login', {

            credentials : 'include',

            method : "POST",

            headers : {
                'Content-Type' : 'application/json',
            },

            body : JSON.stringify({
                email,
                password
            })
        })

        const data = await response.json()

        if(data.message === "EMAIL OR PASSWORD IS INCORRECT"){
            setError(data.message)
            return
        }

        if(data.message === "account login successfull!"){
            navigate('/home')
        }
    }

    return (
        <>
            <Link to='/auth/regis'>REGISTER</Link>

            <form className="main" onSubmit={handleSubmit}>

                <h1>LOGIN PAGE</h1>

                <label>Email</label>

                <input
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <label>Password</label>

                <input
                    type="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                <br />

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <button type="submit">LOGIN</button>

            </form>
        </>
    )
}

export default LoginPage