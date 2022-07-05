const express = require('express');
const { Router } = express;
const routerProducts = Router();
let productos = []
routerProducts.get('/', (req, res) =>{
    res.send(productos)
})

routerProducts.post('/', (req, res) => {
    const {body} = req;
    productos.push(body)
    res.send(body)
});

routerProducts.put('/', (req, res) => res.send('products updated'));

routerProducts.delete('/', (req, res) => res.send('products deleted'));

module.exports = routerProducts;
