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
    const [id, setId]=useState('')


    const volver = useNavigate()
    const handleVolver = () => {
        volver('/clientes')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const res = await axios.post('http://localhost:3001/clientes', {
            _id: Number(id), nombre, apellido, email, telefono, direccion, pedidos
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
     }

    return (
        <form onSubmit={handleSubmit} className='form-crear'>
        <h2>Crear Cliente</h2>
        <input  type="number" value={id} onChange={e=> setId(e.target.value)} placeholder='ID de cliente' required/>
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

export default FormularioCrearCliente
  