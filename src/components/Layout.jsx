import React from 'react'
import Sidebar from './Sidebar'
import OpcionesCrud from './OpcionesCrud'
import { useState } from 'react'
import Buscador from './Buscador'
import ProductoLista from './ProductoLista'
import { Routes, Route } from 'react-router'
import FormularioCrearProducto from './FormularioCrearProductos'
import ClientesLista from './ClientesLista'


function Layout() {
  const [busqueda, setBusqueda] = useState('')

  return (

      <div className="contenedor">
        <Sidebar />
        <main className="contenido-general">
          <OpcionesCrud />
          <Buscador setBusqueda={setBusqueda} />
          <Routes>
            <Route path="/" element={<ProductoLista busqueda={busqueda} />} />
            <Route path="/productos/crear" element={<FormularioCrearProducto />} />
            <Route path='/clientes' element={<ClientesLista busqueda={busqueda}/>}/>
          </Routes>
        </main>
      </div>
  )
}

export default Layout

