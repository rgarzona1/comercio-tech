import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

function FormularioEditarCliente() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [cliente, setCliente] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: ''
  })

  useEffect(() => {
    axios.get(`http://localhost:3001/clientes/${id}`)
      .then(res => setCliente(res.data))
      .catch(err => console.error('Error al cargar cliente:', err))
  }, [id])

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:3001/clientes/${id}`, cliente)
      alert('Cliente actualizado')
      navigate('/clientes')
    } catch (err) {
      console.error('Error al actualizar cliente:', err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-crear">
      <h2>Editar Cliente</h2>
      <input
        type="text"
        name="nombre"
        value={cliente.nombre}
        placeholder="Nombre"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="apellido"
        value={cliente.apellido}
        placeholder="Apellido"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        value={cliente.email}
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="telefono"
        value={cliente.telefono}
        placeholder="Teléfono"
        onChange={handleChange}
      />
      <input
        type="text"
        name="direccion"
        value={cliente.direccion}
        placeholder="Dirección"
        onChange={handleChange}
      />
      <button type="submit">Guardar Cambios</button>
    </form>
  )
}

export default FormularioEditarCliente
