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

const formContacto = (req, res)=>{
    const {nombre,email,mensaje} = req.body;
    databaseConnection.query('INSERT INTO formcontacto(nombre,email,mensaje)VALUES(?, ?, ?)',[nombre,email,mensaje],(error, data)=>{
        if (error){
            console.log(error);
        }else{
            res.render('pages/mensajeEnviado');
        }
    })
}

const loginUser = (req, res)=>{
    res.render('pages/logIn');
}

const signUp = (req, res)=>{
    res.render('pages/signUp');
}

module.exports = {
    renderHome,
    verMasProdcutos,
    formContacto,
    loginUser,
    signUp
}