
//aqui se define la ruta de los productos
// este archivo maneja las peticiones GET para obtener la lista de productos

import { Router } from 'express'
const router = Router()
import Product from '../models/product.js'

router.get('/', async (req, res) => {
  const productos = await Product.find()
  res.json(productos)
})

// Crear un producto nuevo
router.post('/', async (req, res) => {
  try {
    const nuevoProducto = new Product(req.body)
    await nuevoProducto.save()
    res.status(201).json(nuevoProducto)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto' })
  }
})

// Editar
router.put('/:id', async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updated)
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar producto' })
  }
})

// Eliminar
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'Producto eliminado' })
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto' })
  }
})

export default router
