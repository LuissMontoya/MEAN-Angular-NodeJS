const express = require('express')

//Crear servidor
const app = express()

//Rutas
app.get('/', (req,res)=>{
    res.send('Hola Mundo')
})



app.listen(4000, ()=>{
    console.log("El servidor está corriendo perfectamente")
})