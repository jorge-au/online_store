const mysql = require('mysql2');

const databaseConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database: 'tienda_online'
});

databaseConnection.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('Servidor conectado a MYSQL');
    }
})

module.exports = databaseConnection;