import { Schema, model } from "mongoose"

const PedidoSchema = new Schema({
  id_pedido: String,
  nombre_cliente: String,
  apellido_cliente: String,
  productos: [
    {
      sku_producto: String,
      nombre_producto: String,
      cantidad: Number,
      precio: Number
    }
  ],
  precio_total_pedido: Number
}, { collection: 'pedidos' })

export default model('Pedido', PedidoSchema)