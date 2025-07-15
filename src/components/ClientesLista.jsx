import { useEffect, useState } from 'react'
import axios from 'axios' //axios es una librería para hacer peticiones HTTP
import Buscador from './Buscador' // Importa el componente Buscador

function ClientesLista( { busqueda,  }) { // ClientesLista es un componente que recibe  busqueda 
  const [clientes, setClientes] = useState([])  // clientes es un estado que almacena la lista de productos, setProductos es la función para actualizar ese estado


  // Efecto para obtener la lista de clientes
  useEffect(() => {
    axios.get('http://localhost:3001/clientes')  //axios se comunica con el backend para obtener la lista de clientes
      .then(res => setClientes(res.data))  // res.data contiene la lista de clientes obtenida del backend
      .catch(err => console.error("Error al obtener clientes:", err))  // Manejo de errores en caso de que la petición falle
  }, [])

  // Función para manejar el cambio en el input de búsqueda
  const clientesFiltrados = clientes.filter(c =>
    c.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="clientes-lista">
      <h2>Lista de Clientes</h2>

      {clientesFiltrados.length === 0 ? (
        <p>No se encontraron clientes.</p>
      ) : (
        <ul>
          {clientesFiltrados.map((c) => (
            <li key={c._id} className="cliente-item">
              <strong>{c.nombre} {c.apellido}</strong><br />
              📧 {c.email}<br />
              📞 {c.telefono}<br />
              📍 {c.direccion}<br />
              Pedidos: {Array.isArray(c.pedidos) ? c.pedidos.join(' || ') : c.pedidos}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ClientesLista// Exporta el componente ClientesLista para que pueda ser utilizado en otros archivos