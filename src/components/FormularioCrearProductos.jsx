import { useState } from 'react'
import axios from 'axios'

function FormularioCrearProducto() {
  const [sku, setSku] = useState('')
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [stock, setStock] = useState(0)
  const [precio, setPrecio] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3001/products', {
        sku, nombre, descripcion, stock, precio
      })
      console.log('Producto creado:', res.data)
    } catch (error) {
      console.error('Error al crear producto:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Producto</h2>
      <input value={sku} onChange={e => setSku(e.target.value)} placeholder="SKU" required />
      <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" required />
      <textarea value={descripcion} onChange={e => setDescripcion(e.target.value)} placeholder="Descripción" />
      <input type="number" value={stock} onChange={e => setStock(e.target.value)} placeholder="Stock" />
      <input type="number" value={precio} onChange={e => setPrecio(e.target.value)} placeholder="Precio" />
      <button type="submit">Guardar</button>
    </form>
  )
}

export default FormularioCrearProducto
