import db from "../configs/database.js";

export const displayTask = (callback) =>{
    const sql = "SELECT task from tasks"
    db.query(sql, callback)
}