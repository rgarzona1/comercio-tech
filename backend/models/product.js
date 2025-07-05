
//este codigo define el modelo de producto para mongoose
// el modelo define la estructura de los documentos en la coleccion de productos
// y se utiliza para interactuar con la base de datos MongoDB

import { Schema, model } from 'mongoose'

const ProductSchema = new Schema({
  sku: String,
  nombre: String,
  descripcion: String,
  stock: Number,
  precio: Number
})

export default model('Product', ProductSchema, 'productos') // 'productos' es el nombre de la colección en la base de datos
