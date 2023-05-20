const pool = require("../config/database");

const getAllUsers = () => {
    const query = `SELECT * FROM usuarios`
    try {
        return pool.query(query)
    } catch (error) {
        return {"error": error.code}
    }
};

const registerUser = (user) => {
    const query = `INSERT INTO usuarios SET ?`
    try {
        return pool.query(query, user)
    } catch (error) {
        return {"error": error.code}
    }
}

module.exports = {
    getAllUsers,
    registerUser
}