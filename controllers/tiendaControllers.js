const info = require('../productos.json');
const {registerUser, sendMessage} = require("../models/model")
const {hashPassword} = require("../utils/handlePassword");

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

const mensaje = async(req, res)=>{
  const dbResponse = await sendMessage(req.body) 
  console.log(dbResponse)
  if(dbResponse instanceof Error) {
    console.log("Hubo un error")
  } else {
    res.render('pages/mensajeEnviado')
  }
}

const loginUser = (req, res)=>{
    res.render('pages/logIn');
}

const signUp = (req, res)=>{
    res.render('pages/signUp')
}

const registro = async(req, res) => {
    const password = await hashPassword(req.body.password)
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: password
    }
    const dbResponse = await registerUser(newUser)
    if(dbResponse instanceof Error) {
        console.log("Hay un error")
    } else {
        res.render("pages/registroEnviado")
    }
};

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