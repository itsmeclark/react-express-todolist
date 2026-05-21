import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react';
function RegisterPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = async (e) =>{
        const response = await fetch('http://localhost:3000/auth/regis', {
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            }, 
            body : JSON.stringify({
                name,
                email,
                password
            })
        })
        const data = await response.json()
        console.log(data)
    }

    return (
        <>
              <form className="main" onSubmit={handleSubmit}>
                <h1>REGISTER PAGE</h1>
                <label>Name</label>
                <input type="text" required onChange={(e)=>{setName(e.target.value)}} value={name}/>
                <label>Email</label>
                <input type="email" required onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                <label>Password</label>
                <input type="password" required onChange={(e)=>{setPassword(e.target.value)}} value={password}/><br/>
                <button type="submit">REGISTER</button>
            </form>
        </>
    )
}
export default RegisterPage;