
//aqui se define la ruta de los productos
// este archivo maneja las peticiones GET para obtener la lista de productos

import { Router } from 'express'
const router = Router()
import Product from '../models/product.js'

router.get('/', async (req, res) => {
  const productos = await Product.find()
  res.json(productos)
})

export default router
