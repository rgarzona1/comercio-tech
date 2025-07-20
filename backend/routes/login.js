

import { Router } from 'express'
const router = Router()


router.post('/', async (req, res) => {
  const { username, password } = req.body
  console.log('Login attempt:', username, password)
  if (username === 'ComercioTechADM' && password === 'ComercioTech2025') {
    res.status(200).json({ message: 'Login exitoso' })
  } else {
    res.status(401).json({ message: 'Usuario o contraseña incorrectos' })
  }
})

export default router
