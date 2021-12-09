const express = require('express');
const routes = express.Router();


const {
    renderHome,
    verMasProdcutos
} = require('../controllers/tiendaControllers');

routes.get('/', renderHome);

routes.get('/masProductos', verMasProdcutos);


module.exports = routes;