const Producto = require("../models/Producto");
const { param } = require("../routes/producto");

exports.crearProducto = async (req, res) => {
  try {
    let producto;

    //crear el producto
    producto = new Producto(req.body);

    await producto.save();
    res.send(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un Error");
  }
};

exports.ObtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un Error");
  }
};


exports.ActualizarProducto = async (req, res) => {
  try {
    const { nombre, categoria, ubicacion , precio } = req.body;
    let producto = await Producto.findById(req.params.id);

    if(!producto){
        res.status(404).json({msg: "No existe el Producto"})
    }

    producto.nombre = nombre;
    producto.categoria = categoria;
    producto.ubicacion = ubicacion;
    producto.precio = precio;

    producto = await Producto.findOneAndUpdate({_id: req.params.id}, producto, { new: true});
    res.json(producto);
    console.log('Actualizado');

  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un Error");
  }
};


exports.ObtenerProducto = async (req, res) =>{
  try {

    let producto = await Producto.findById(req.params.id);

    if(!producto){
        res.status(404).json({msg: "No existe el Producto"})
    }
    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un Error");
  }
}


exports.EliminarProducto = async (req, res) =>{
  try {
    let producto = await Producto.findById(req.params.id);

    if(!producto){
        res.status(404).json({msg: "No existe el Producto"})
    }

    await Producto.findOneAndRemove({ _id: req.params.id });
    res.json({msg: 'Producto Eliminado!'});

  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un Error");
  }
}