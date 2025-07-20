import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

function FormularioEditarProducto() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [producto, setProducto] = useState({
    nombre: '',
    sku: '',
    descripcion: '',
    precio: 0,
    stock: 0
  })

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${id}`)
      .then(res => setProducto(res.data))
      .catch(err => console.error('Error al cargar producto:', err))
  }, [id])

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:3001/products/${id}`, producto)
      alert('Producto actualizado')
      navigate('/productos')
    } catch (err) {
      console.error('Error al actualizar:', err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-crear">
      <h2>Editar Producto</h2>

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={producto.nombre}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="sku"
        placeholder="SKU"
        value={producto.sku}
        onChange={handleChange}
        required
      />

      <textarea
        name="descripcion"
        placeholder="Descripción"
        value={producto.descripcion}
        onChange={handleChange}
      />

      <input
        type="number"
        name="precio"
        placeholder="Precio"
        value={producto.precio}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={producto.stock}
        onChange={handleChange}
        required
      />

      <button type="submit">Guardar Cambios</button>
    </form>
  )
}

export default FormularioEditarProducto
