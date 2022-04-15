const express = require ("express")
const app = express()
const { engine } = require("express-handlebars")
app.engine("hbs",
    engine({
        extname: ".hbs",
        defaultLayout: "index.hbs",
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials"

    })

);

app.set("view engine", "hbs");
app.set("views", "./views")
app.use(express.static("public"))

const producto =() => [
    {
        titulo: "Heladera",
        precio: 12000,
        id: 1,
        thumbnail:"url"
    },
    {
        titulo: "Calefon",
        precio: 22000,
        id: 2,
        thumbnail:"url"
    },
    {
        titulo: "Horno",
        precio: 15000,
        id: 3,
        thumbnail:"url"
    },
]

app.get("/productos", (req, res) =>{
    res.render("main", {productos: producto()})
})

app.post("/productos", (req, res)=>{
    res.render()
})


//--------------------------------------------------

const PORT= 8080
app.listen(PORT, ()=>{
    console.log(`Servidor http escuchando desde el puerto ${PORT}`);

})