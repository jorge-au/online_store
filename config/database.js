const mysql = require('mysql2');

const databaseConnection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
});

databaseConnection.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('Servidor conectado a MYSQL');
    }
})

module.exports = databaseConnection;