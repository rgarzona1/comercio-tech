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
import OpcionesCrudPedidos from './OpcionesCrudPedidos'
import PedidosLista from './PedidosLista'
import FormularioCrearPedido from './FormularioCrearPedido'
import RutaInicial from './RutaInicial'
import FormularioEditarProducto from './FormularioEditarProducto'
import FormularioEditarCliente from './FormularioEditarCliente'
import FormularioEditarPedidos from './FormularioEditarPedidos'


function Layout() {
  const [busqueda, setBusqueda]=useState('')
  return (
    <div className="contenedor">
      <Sidebar />
      <main className='contenido-general'>
        <Routes>
          <Route
            path="/productos"
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
          <Route
            path='/pedidos'
            element={
              <>
              <OpcionesCrudPedidos />
              <Buscador setBusqueda={setBusqueda}/>
              <PedidosLista  busqueda={busqueda}/>
              </>
            }
          />
          <Route
            path='pedidos/crear'
            element={<FormularioCrearPedido />}
          />
          <Route path="/productos/editar/:id" element={<FormularioEditarProducto />} />
          <Route path="/clientes/editar/:id" element={<FormularioEditarCliente />} />
          <Route path="/pedidos/editar/:id" element={<FormularioEditarPedidos />} />
        </Routes>
      </main>
    </div>
  )
}



export default Layout

