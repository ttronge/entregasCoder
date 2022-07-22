const express = require('express')
const Contenedor = require('./contenedor')

const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = new Contenedor('db.json')

app.get('/', (req, res) => res.sendFile('./views/form.html')) // dir name
app.post('/products', (req, res) => {
    db.save(req.body)
        .then(() => res.redirect('/'))
        .catch((e) => {
            console.log(e);
            res.send('Error save')
        })
})

app.get('/products', (req, res) => {
    db.getData()
        .then(d => res.render('products.ejs'))
        .catch((e) => {
            console.log(e);
            res.send('Error to load data')
        })
})

app.listen(8080)