const express = require('express');
const app = express();
const path = require('path');

//config 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res)=>{
    res.render("index");
});

app.get('/masProductos', (req, res)=>{
    res.render('./pages/masProductos');
})


//servidor
app.listen(3000, ()=>{
    console.log("Server conrriendo en el puerto 3000");
});