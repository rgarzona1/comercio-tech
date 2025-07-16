import React from 'react'
import Sidebar from './Sidebar'
import OpcionesCrudProducto from './OpcionesCrudProducto'
import OpcionesCrudClientes from './OpcionesCrudClientes'
import { useState } from 'react'
import Buscador from './Buscador'
import ProductoLista from './ProductoLista'
import { Routes, Route } from 'react-router'
import FormularioCrearProducto from './FormularioCrearProductos'
import ClientesLista from './ClientesLista'
import FormularioCrearCliente from './FormularioCrearCliente'


function Layout() {
  const [busqueda, setBusqueda]=useState('')
  return (
    <div className="contenedor">
      <Sidebar />
      <main className='contenido-general'>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <OpcionesCrudProducto />
                <Buscador setBusqueda={setBusqueda}/>
                <ProductoLista busqueda={busqueda}/>
              </>
            }
          />
          <Route
            path="/productos/crear"
            element={<FormularioCrearProducto />}
          />

          <Route
            path="/clientes"
            element={
              <>
                <OpcionesCrudClientes />
                <Buscador setBusqueda={setBusqueda}/>
                <ClientesLista busqueda={busqueda} />
              </>
            }
          />
          <Route
            path="/clientes/crear"
            element={<FormularioCrearCliente />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default Layout

