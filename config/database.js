const mysql = require('mysql2');
const util = require("util");

const pool = mysql.createPool({
    host:process.env.DB__HOST,
    user:process.env.DB__USER,
    database: process.env.DB__DATABASE,
});

pool.getConnection((error) => {
    if(error){
        console.warn("No conectado", {"error": error.message});
    }else{
        console.log('Servidor conectado a la Base de Datos');
    }
})

pool.query = util.promisify(pool.query);
module.exports = pool;