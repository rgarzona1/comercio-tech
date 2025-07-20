

import { Router } from 'express'
const router = Router()
import Client from '../models/cliente.js'

router.get('/', async (req, res) => {
  const clientes = await Client.find()
  res.json(clientes)
})

// Crear un cliente nuevo
router.post('/', async (req, res) => {
  try {
    const nuevoCliente = new Client(req.body)
    await nuevoCliente.save()
    res.status(201).json(nuevoCliente)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear cliente' })
  }
})

// Editar
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const updated = await Client.findByIdAndUpdate(id, req.body, { new: true })
  res.json(updated)
})

// Eliminar
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await Client.findByIdAndDelete(id)
  res.json({ message: 'Cliente eliminado' })
})

export default router