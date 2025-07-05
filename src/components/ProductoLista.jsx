import { useEffect, useState } from 'react'
import axios from 'axios' //axios es una librería para hacer peticiones HTTP
import Buscador from './Buscador' // Importa el componente Buscador

function ProductoLista( { busqueda,  }) { // ProductoLista es un componente que recibe  busqueda 
  const [productos, setProductos] = useState([])  // productos es un estado que almacena la lista de productos, setProductos es la función para actualizar ese estado


  // Efecto para obtener la lista de productos
  useEffect(() => {
    axios.get('http://localhost:3001/products')  //axios se comunica con el backend para obtener la lista de productos
      .then(res => setProductos(res.data))  // res.data contiene la lista de productos obtenida del backend
      .catch(err => console.error("Error al obtener productos:", err))  // Manejo de errores en caso de que la petición falle
  }, [])

  // Función para manejar el cambio en el input de búsqueda
  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
  <div className="lista-productos">
    <ul>
      {productosFiltrados.map(p => (
        <li key={p._id}>
          <strong>{p.nombre}</strong><br />
          {p.descripcion}<br />
          <small>
            SKU: {p.sku} | Stock: {p.stock} | Precio: ${p.precio}
          </small>
        </li>
      ))}
    </ul>
  </div>
)
}

export default ProductoLista // Exporta el componente ProductoLista para que pueda ser utilizado en otros archivos

