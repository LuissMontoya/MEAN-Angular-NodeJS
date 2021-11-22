const express = require('express');
const conectarDB = require('./config/db');

//Crear servidor
const app = express()

//Conectamos a la BD
conectarDB();
app.use(express.json());//Habilitar JSON

app.use('/api/productos', require('./routes/producto'));

//Rutas
app.get('/', (req,res)=>{
    res.send('Hola Mundo')
})

app.listen(4000, ()=>{
    console.log("El servidor está corriendo perfectamente")
})