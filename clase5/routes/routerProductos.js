const express = require('express');
const path = require('path');
const { Router } = express;
const routerProducts = Router();

let productos = [];
let numberId = 1;

routerProducts.get('/seeForm', (req, res) => {
    const pathFile = path.join(__dirname, '../public/index.html')
    res.sendFile(pathFile)
});


routerProducts.get('/:id', (req, res) => {
    const { params: { id } } = req;;
    const buscador = productos.find(p => p.id == id);
    if (buscador) res.json(buscador);
    res.json({ error: "Producto no encontrado" });
});
routerProducts.get('/', (req, res) => {
    res.json(productos)  
})

routerProducts.post('/', (req, res) => {
    const { body } = req;
    body.id = numberId;
    if (body.title && body.thumbnail) {
        productos.push(body);
        res.json(body);
        numberId++
    }
    else {
        res.json({ error: "Faltan caracterisictas al producto" });
    };
});

routerProducts.put('/:id', (req, res) => {
    const { body: { title, thumbnail }, params: { id } } = req;
    const buscador = productos.find(x => x.id == id);
    if (buscador) {
        productos.splice(id-1, 1);
        buscador.title = title;
        buscador.thumbnail = thumbnail;
        productos.push(buscador);
        res.json(buscador);
    }
    else {
        res.json({ error: "Producto no encontrado" });
    };
});

routerProducts.delete('/:id', (req, res) => {
    const { params: { id } } = req;
    const buscador = productos.find(x => x.id == id);
    if (buscador) {
        let borrar = id - 1;
        productos.splice(borrar, 1);
        res.json(`se elimino el ${id}`);
    }
    else {
        res.json({ error: "Producto no encontrado" });
    };
});

module.exports = routerProducts;
