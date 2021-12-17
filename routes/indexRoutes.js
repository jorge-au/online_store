const express = require('express');
const routes = express.Router();


const {
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
} = require('../controllers/tiendaControllers');

routes.get('/', renderHome);

routes.get('/masProductos', verMasProdcutos);

routes.post('/mensajeEnviado',mensaje);

routes.get('/logIn', loginUser);

routes.get('/signUp', signUp);

routes.post('/registroEnviado', registro)

routes.get('/notebooks', pageNotebook);

routes.get('/pcGamer', pagePcGamer);

routes.get('/celulares', pageCelular);

routes.get('/auriculares', pageAuricular);



module.exports = routes;