const databaseConnection = require('../config/database');
const info = require('../productos.json');

const renderHome = (req, res)=>{
    res.render('pages/index',{
        dataProductos:info
    })
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

const mensaje = (req, res)=>{
    const {nombre,email,mensaje} = req.body;
    databaseConnection.query('INSERT INTO mensaje(nombre,email,mensaje)VALUES(?, ?, ?)',[nombre,email,mensaje],(error, data)=>{
        if (error){
            console.log(error);
        }else{
           res.render('pages/mensajeEnviado')
        }
    })
}

const loginUser = (req, res)=>{
    res.render('pages/logIn');
}

const signUp = (req, res)=>{
    res.render('pages/signUp')
}
const registro = (req, res)=>{
    const{nombre,apellido,email,contraseña} = req.body;
    databaseConnection.query('INSERT INTO registro(nombre,apellido,email,contraseña)VALUES(?,?,?,?)',[nombre,apellido,email,contraseña],(error, data)=>{
        if(error){
            console.log(error);
        }else{
            res.render('pages/registroEnviado');
        }
    })
}

module.exports = {
    renderHome,
    verMasProdcutos,
    mensaje,
    loginUser,
    signUp,
    registro
}