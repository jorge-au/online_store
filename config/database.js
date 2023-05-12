const mysql = require('mysql2');
const util = require("util");

const databaseConnection = mysql.createConnection({
    host:process.env.DB__HOST,
    user:process.env.DB__USER,
    database: process.env.DB__DATABASE,
    password: process.env.DB__PASS,
});

databaseConnection.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('Servidor conectado a MYSQL');
    }
})

databaseConnection.query = util.promisify(databaseConnection.query);
module.exports = databaseConnection;