import { Schema, model} from "mongoose"


const ClienteSchema = new Schema({
  nombre: String,
  apellido: String,
  email: String,
  telefono: String,
  direccion: String,
  pedidos: Array 
})

export default model('Client', ClienteSchema, 'clientes')