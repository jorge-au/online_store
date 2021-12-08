const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=>{
    res.render("index");
});

const home = require('../controllers/tiendaControllers');

routes.get('/home', home =>{
    console.log(home)
})


module.exports = routes;