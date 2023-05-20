require("dotenv").config();
require("./config/database");
const express = require("express");
const app = express();
const routes = require("./routes/indexRoutes");
const path = require("path");
const port = process.env.PORT || 3000;

//config para usar archivos tipo json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config de vistas y public
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//conf de rutas
app.use("", routes);

// Atajador de ruta 404
// app.use((req, res)=> {
//   res.render("pages/notFounded")
// })

//servidor
app.listen(port, (err) => {
  if (err) {
    console.log(`Hubo un error: ${err}`);
  } else {
    console.log(`Server corriendo en http://localhost:${port}`);
  }
});
