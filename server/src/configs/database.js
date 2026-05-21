import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    port : process.env.DB_PORT,
})

if(db){
    console.log('mysql connected')
}else{
    console.log('not connected')
}
export default db;