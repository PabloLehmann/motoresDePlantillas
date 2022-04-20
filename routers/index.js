const express = require ("express")
const {Router} = express
const {productos, guardarProducto} = require ("../controllers/container.js")

const routerProductos = Router();

routerProductos.get("/productos", (req,res) =>{
    let producto = productos()
    res.render("tabla", {productos: producto})
})

routerProductos.post("/productos", (req, res)=>{
    let productoNuevo = req.body
    guardarProducto(productoNuevo)
    console.log(productoNuevo);
    res.redirect("/productos")
})
module.exports= routerProductos