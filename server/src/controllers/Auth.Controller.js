import {registerUser, findEmail} from '../models/Auth.model.js'
import bcrypt from 'bcrypt'

export const addUser = async (req, res) => {
    const {name, email, password} = req.body

    try {
        const hashedPass = await bcrypt.hash(password, 10)
        registerUser(name, email, hashedPass, (err, results)=>{
            res.json({
                message : "user registered"
            })
        })
    }catch(err){
        res.json({
                message : "err"
            })
    }
}
export const findUser = async (req, res) => {
    const {email, password} = req.body

    findEmail(email, async (err, results)=>{
          if(results.length === 0){
                return res.json({
                    message : "EMAIL OR PASSWORD IS INCORRECT"
                })
            }
        try{
            const user = results[0]
            const pass = await bcrypt.compare(password, user.password)
           
            if(!pass){
                return res.json({
                    message : "EMAIL OR PASSWORD IS INCORRECT",
                })
            }
            const {password: _, ...userNoPass} = user
            req.session.user = userNoPass
            req.session.save(()=>{
                res.json({
                    message : 'account login successfull!',
                })
            })
        }catch(err){
            console.log(err)
        }
    })
} 

export const getUser = (req, res) => {
    if(!req.session.user){
        return res.json({
            loggedIn : false
        })
    }
    res.json({
        loggedIn : true,
        user : req.session.user
    })
}
export const logoutUser = (req, res) =>{
    req.session.destroy((err)=>{
         if (err) {
            return res.status(500).send('Logout failed');
        }
        res.clearCookie('connect.sid')
        return res.json({
            loggedIn : false
        })
    })
}