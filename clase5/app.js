const express = require('express');
const routerProducts = require('./routes/routerProductos');
const app = express();
app.use(express.json());
app.use('/api/productos',routerProducts)

app.listen(8080);