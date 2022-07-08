const express = require('express');
const routerProducts = require('./routes/routerProductos');
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static("public"));

app.use('/api/productos', routerProducts);
app.use('/uploads',express.static('uploads'))

app.listen(8080, () => console.log("Its running in port 8080"));
app.on("error", (error) => console.log("Hubo un error " + error));