import { Router } from 'express'
const router = Router()
import Pedido from '../models/pedido.js'

router.get('/', async (req, res) => {
  const pedidos = await Pedido.find()
  res.json(pedidos)
})

// Crear un producto nuevo
router.post('/', async (req, res) => {
  try {
    const nuevoPedido = new Pedido(req.body)
    await nuevoPedido.save()
    res.status(201).json(nuevoPedido)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto' })
  }
})
export default router