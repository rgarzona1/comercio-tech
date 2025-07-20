import { useEffect, useState } from 'react'
import axios from 'axios' 
import { useNavigate } from 'react-router-dom'

function PedidosLista({busqueda}){
    const [pedidos, setPedidos]= useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3001/pedidos')  //axios se comunica con el backend para obtener la lista de pedidos
        .then(res => setPedidos(res.data))  // res.data contiene la lista de clientes obtenida del backend
        .catch(err => console.error("Error al obtener pedidos:", err))  // Manejo de errores en caso de que la petición falle
    }, [])

    const pedidosFiltrados = pedidos.filter(c =>
    c.id_pedido.toLowerCase().includes(busqueda.toLowerCase())
  )
    const fetchPedidos = async () => {
    try {
      const res = await axios.get('http://localhost:3001/pedidos')
      setPedidos(res.data)
    } catch (err) {
      console.error('Error al obtener pedidos:', err)
    }
  }
   const handleDelete = async (id) => {
    if (window.confirm('¿Seguro que quieres eliminar este pedido?')) {
      try {
        await axios.delete(`http://localhost:3001/pedidos/${id}`)
        alert('Pedido eliminado')
        fetchPedidos()
      } catch (err) {
        console.error('Error al eliminar pedido:', err)
      }
    }
  }

  return(
    <div className="pedidos-lista">
      <h2>Lista de Pedidos</h2>

      {pedidos.length === 0 ? (
        <p>No hay pedidos registrados.</p>
      ) : (
        <ul>
          {pedidosFiltrados.map((p) => (
            <li key={p._id} className="pedido-item">
              <strong>ID Pedido:</strong> {p.id_pedido} <br />
              <strong>Cliente:</strong> {p.nombre_cliente} {p.apellido_cliente} <br />
              <strong>Productos:</strong>
              <ul>
                {p.productos.map((prod, i) => (
                  <li key={i}>
                    SKU: {prod.sku_producto} | Nombre: {prod.nombre_producto} | Cantidad: {prod.cantidad} | Precio: ${prod.precio}
                  </li>
                ))}
              </ul>
              <strong>Precio Total:</strong> ${p.precio_total_pedido}
              <br />
              <div className="acciones">
                <button onClick={() => navigate(`/pedidos/editar/${p._id}`)}>Editar</button>
                <button onClick={() => handleDelete(p._id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PedidosLista
  
