import {registerUser} from '../models/register.model.js'
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