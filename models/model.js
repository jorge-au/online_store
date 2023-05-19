const pool = require("../config/database");

const getAllUsers = () => {
    const query = `SELECT * FROM usuarios`
    try {
        return pool.query(query)
    } catch (error) {
        error.message = error.code
        return error
    }
};

const registerUser = (user) => {
    const query = `INSERT INTO usuarios SET ?`
    try {
        return pool.query(query, user)
    } catch (error) {
        error.message = error.code
        return error
    }
}

module.exports = {
    getAllUsers,
    registerUser
}