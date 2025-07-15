import { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from "react-router"


function FormularioCrearCliente(){
    const [nombre, setNombre]= useState('')
    const [apellido, setApellido]=useState('')
    const [email, setEmail]=useState('')
    const [telefono, setTelefono]= useState('')
    const [direccion, setDireccion]= useState('')
    const [pedidos, setPedidos]=useState([])


    const volver = useNavigate()
    const handleVolver = () => {
        volver('/')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const res = await axios.post('http://localhost:3001/clientes', {
            nombre, apellido, email, telefono, pedidos
        })
        alert('Cliente creado:', res.data)

        //limpiar form

        setNombre('')
        setApellido('')
        setEmail('')
        setTelefono('')
        setDireccion('')
        setPedidos([])



        } catch (error) {
        alert('Error al crear cliente:', error)
        }

    return (
    <form onSubmit={handleSubmit} className='Formulario-Crear'>
      <h2>Crear Cliente</h2>
      <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" required />
      <input value={apellido} onChange={e => setApellido(e.target.value)} placeholder="Apellido" required />
      <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={telefono} onChange={e=> setTelefono(e.target.value)} placeholder='Telefono'/>
      <textarea  value={direccion} onChange={e => setDireccion(e.target.value)} placeholder="Dirección" />
      <button type="submit">Guardar</button>
      <button type="button" onClick={handleVolver}>Volver a la lista</button>
    </form>
    
  )
}
}
export default FormularioCrearCliente
  