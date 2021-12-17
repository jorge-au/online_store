const mysql = require('mysql2');

const databaseConnection = mysql.createConnection({
    host:'bux9sttnrdnxrskuzqjm-mysql.services.clever-cloud.com',
    user:'udz7ecxbhg6k6arb',
    database: 'bux9sttnrdnxrskuzqjm',
    password:'31CwTa5dhTAdQND3JOD7'
});

databaseConnection.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('Servidor conectado a MYSQL');
    }
})

module.exports = databaseConnection;