import db from "../configs/database.js"

export const registerUser = (name,email, pass, callback) => {
    const sql = "INSERT INTO users(name,email, password) VALUES (?,?, ?)"
    db.query(sql, [name, email, pass], callback)
}