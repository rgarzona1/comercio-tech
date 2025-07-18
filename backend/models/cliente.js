import { Schema, model} from "mongoose"


const ClienteSchema = new Schema({
  _id: Number,
  nombre: String,
  apellido: String,
  email: String,
  telefono: String,
  direccion: String,
  pedidos: [String]
})

export default model('Cliente', ClienteSchema, 'clientes')