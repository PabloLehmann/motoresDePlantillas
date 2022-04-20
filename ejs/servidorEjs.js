const express = require('express');
const routerProductos = require('../routers/index.js')

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.set('view engine', 'ejs');

app.use('/', routerProductos)

app.get('/', (req, res) => {
    res.render('form');
})


const PORT = 8080

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})