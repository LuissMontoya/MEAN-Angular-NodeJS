//Rutas para producto
const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

//api/productos
router.post("/", productoController.crearProducto);
router.get("/", productoController.ObtenerProductos)
router.put("/:id", productoController.ActualizarProducto)
router.get("/:id", productoController.ObtenerProducto)
router.delete("/:id", productoController.EliminarProducto)


module.exports = router;
