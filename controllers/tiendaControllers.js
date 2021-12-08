const databaseConnection = require('../config/database');

const home = (req, res)=>{
    databaseConnection.query('SELECT*FROM productos', (error, data)=>{
        if(error){
            console.log(error);
        }else{
            console.log(data);
        }
    })
}

module.exports = {
    home
}