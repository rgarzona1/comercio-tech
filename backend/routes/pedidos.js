import { Router } from 'express'
const router = Router()
import Pedido from '../models/pedido.js'
import Cliente from '../models/cliente.js'

router.get('/', async (req, res) => {
  const pedidos = await Pedido.find()
  res.json(pedidos)
})

// Crear pedido y agregarlo al cliente
router.post('/', async (req, res) => {
  try {
    // 1. Crear pedido
    const nuevoPedido = new Pedido(req.body)
    await nuevoPedido.save()

    // 2. Agregar pedido al cliente
    await Cliente.findByIdAndUpdate(
      Number(req.body.cliente_id),
      { $push: { pedidos: nuevoPedido.id_pedido } }
    )
    

    res.status(201).json(nuevoPedido)

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al crear pedido' })
  }
})

// Editar
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const updated = await Pedido.findByIdAndUpdate(id, req.body, { new: true })
  res.json(updated)
})

// Eliminar
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await Pedido.findByIdAndDelete(id)
  res.json({ message: 'Pedido eliminado' })
})

export default router