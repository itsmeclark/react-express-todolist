import express from 'express'
import db from './src/configs/database.js'
import AuthRoutes from './src/routes/Auth.Routes.js'
import cors from 'cors'
const app = express();

app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(express.json())

app.use('/auth/', AuthRoutes)

app.listen(3000,()=>{
    console.log('http://localhost:3000/')
} )