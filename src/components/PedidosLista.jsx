import { useEffect, useState } from 'react'
import axios from 'axios' 
import Buscador from './Buscador' 

function PedidosLista({busqueda}){
    const [pedidos, setPedidos]= useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/pedidos')  //axios se comunica con el backend para obtener la lista de pedidos
        .then(res => setPedidos(res.data))  // res.data contiene la lista de clientes obtenida del backend
        .catch(err => console.error("Error al obtener pedidos:", err))  // Manejo de errores en caso de que la petición falle
    }, [])

    const pedidosFiltrados = pedidos.filter(c =>
    c.id_pedido.toLowerCase().includes(busqueda.toLowerCase())
  )

  return(
    <div className="pedidos-lista">
      <h2>Lista de Pedidos</h2>

      {pedidos.length === 0 ? (
        <p>No hay pedidos registrados.</p>
      ) : (
        <ul>
          {pedidos.map((p) => (
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
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PedidosLista
  
