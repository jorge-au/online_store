const express = require('express');
const app = express();
const routes = require('./routes/indexRoutes');
const path = require('path');
const port = 3000;
const databaseConnection = require('./config/database');

//conexion a Mysql
databaseConnection.connect();

//config para usar archivos tipo json
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//config de vistas y public
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


//conf de rutas
app.use('/', routes);

//servidor
app.listen(port, ()=>{
    console.log(`Server corriendo en el puerto ${port}`);
});