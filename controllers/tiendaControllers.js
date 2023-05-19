const info = require('../productos.json');
const {registerUser} = require("../models/model")

const renderHome = (req, res)=>{
    res.render('pages/index',{
        dataProductos:info
    })
}

const verMasProdcutos = (req, res)=>{
    pool.query('SELECT*FROM productos', (error, data)=>{
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
    pool.query('INSERT INTO mensaje(nombre,email,mensaje)VALUES(?, ?, ?)',[nombre,email,mensaje],(error, data)=>{
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
// const registro = (req, res)=>{
//     const{nombre,apellido,email,contraseña} = req.body;
//     pool.query('INSERT INTO registro(nombre,apellido,email,contraseña)VALUES(?,?,?,?)',[nombre,apellido,email,contraseña],(error, data)=>{
//         if(error){
//             console.log(error);
//         }else{
//             res.render('pages/registroEnviado');
//         }
//     })
// }
const registro = async(req, res) => {
    const dbResponse = await registerUser({...req.body})
    if(dbResponse instanceof Error) {
        console.log("Hay un error")
    } else {
        res.render("pages/registroEnviado")
    }
}

const pageNotebook = (req, res)=>{
    pool.query('SELECT * FROM productos WHERE categoria = "Notebooks"', (error, data)=>{
        if(error){
            console.log(error)
        }else{
            res.render('pages/notebooks', {data})
        }
    })
}

const pagePcGamer = (req, res)=>{
    pool.query('SELECT * FROM productos WHERE categoria = "pc_escritorio"', (error, data)=>{
        if(error){
            console.log(error)
        }else{
            res.render('pages/pcGamer', {data});
        }
    })
}

const pageCelular = (req, res)=>{
    pool.query('SELECT * FROM productos WHERE categoria = "celular"', (error, data)=>{
        if(error){
            console.log(error)
        }else{
            res.render('pages/celulares', {data});
        }
    })
}

const pageAuricular = (req, res)=>{
    pool.query('SELECT * FROM productos WHERE categoria = "auriculares"', (error, data)=>{
        if(error){
            console.log(error)
        }else{
            res.render('pages/auriculares', {data});
        }
    })
}

module.exports = {
    renderHome,
    verMasProdcutos,
    mensaje,
    loginUser,
    signUp,
    registro,
    pageNotebook,
    pagePcGamer,
    pageCelular,
    pageAuricular
}