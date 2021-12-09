const databaseConnection = require('../config/database');

const renderHome = (req, res)=>{
    res.render('pages/index');
}

const verMasProdcutos = (req, res)=>{
    databaseConnection.query('SELECT*FROM productos', (error, data)=>{
        if(error){
            console.log(error);
        }else{
            res.render('pages/masProductos',{
                data
            })
        }
    })
}

module.exports = {
    renderHome,
    verMasProdcutos
}