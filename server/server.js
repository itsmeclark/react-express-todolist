import express from 'express'
import db from './src/configs/database.js'
import AuthRoutes from './src/routes/Auth.Routes.js'
import cors from 'cors'
import session from 'express-session'
const app = express();

app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials : true
}))
app.use(express.json())
app.use(session({
    secret : process.env.SECRET_SESSION_KEY,
    resave : false,
    saveUninitialized : false,
    cookie : {
        maxAge : 1000 * 60 * 60,
        httpOnly: true
    }
}))

app.use('/auth/', AuthRoutes)


app.listen(3000,()=>{
    console.log('http://localhost:3000/')
} )