const express = require('express');
const fs = require('fs');

const app = express();
const port = 8080;

// utils
const productos = JSON.parse(fs.readFileSync('./productos.txt'))
const number = productos.map(product => product.id)
const random = () =>  Math.floor(1+ Math.random() * (number.length-1));+


app.get('/productos', (req, res) => {
    res.send(productos)
});

app.get('/producto-random', (req, res) => {
    const resultado = ()=> productos.find(r=>r.id === random())
    res.send(resultado())
   
});

const server = app.listen(port, () => {
    console.log(`this is running in port ${port}`);
});

server.on('error', err => console.log(`there is an error ${err}`));