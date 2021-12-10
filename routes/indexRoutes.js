const express = require('express');
const routes = express.Router();


const {
    renderHome,
    verMasProdcutos,
    formContacto,
    loginUser,
    signUp
} = require('../controllers/tiendaControllers');

routes.get('/', renderHome);

routes.get('/masProductos', verMasProdcutos);

routes.post('/mensajeEnviado',formContacto);

routes.get('/logIn', loginUser);

routes.get('/signUp', signUp);


module.exports = routes;