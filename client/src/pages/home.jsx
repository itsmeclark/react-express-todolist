import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function HomePage(){
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(()=>{

        const getUser = async () =>{

            try{
                const response = await fetch('http://localhost:3000/home', {
                    credentials : 'include'
                })
                const data = await response.json()

                if(data.loggedIn){
                    setUser(data.user)
                }
                if(!data.loggedIn){
                    navigate('/')
                }

            }catch(err){
                
            }
        }

        getUser()

    }, [])

    return (
        <>
            <h1>
                {user ? user.name : 'No User'}
            </h1>

            <input type="text" />
            <button type="submit">add</button>
            <Link to='/auth/logout'><button>LOGOUT</button></Link>
        </>
    )
}

export default HomePage