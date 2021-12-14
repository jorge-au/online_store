const express = require('express');
const routes = express.Router();


const {
    renderHome,
    verMasProdcutos,
    mensaje,
    loginUser,
    signUp,
    registro
} = require('../controllers/tiendaControllers');

routes.get('/', renderHome);

routes.get('/masProductos', verMasProdcutos);

routes.post('/mensajeEnviado',mensaje);

routes.get('/logIn', loginUser);

routes.get('/signUp', signUp);

routes.post('/registroEnviado', registro)



module.exports = routes;