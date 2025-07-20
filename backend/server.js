
//este archivo es el punto de entrada del servidor
// aqui se configura el servidor express, se conecta a la base de datos MongoDB y se definen las rutas

import express, { json } from 'express'
import { connect } from 'mongoose'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(json())

// Conexión a MongoDB (solo una vez, bien hecha)
connect('mongodb://gestor_tienda:Digital_199%40@localhost:27017/ComercioTech?authSource=ComercioTech')
  .then(async () => {
    console.log(' Conectado a MongoDB')

    const db = (await import('mongoose')).default.connection
    console.log(' Base de datos usada:', db.name)
  })

.catch(err => {
  console.error('Error al conectar a MongoDB:', err)
})

// Rutas
import productRoutes from './routes/products.js' // agrega ".js" si usas módulos ES6
app.use('/products', productRoutes)
import clientRoutes from './routes/clientes.js'
app.use('/clientes', clientRoutes)
import pedidoRoutes from './routes/pedidos.js'
app.use('/pedidos', pedidoRoutes)
import loginRoutes from './routes/login.js'
app.use('/login', loginRoutes)

//Iniciar servidor
app.listen(3001, () => {
  console.log("Servidor corriendo en puerto 3001")
})




  
