import React from 'react'
import Sidebar from './Sidebar'
import OpcionesCrud from './OpcionesCrud'
import { useState } from 'react'
import Buscador from './Buscador'
import ProductoLista from './ProductoLista'

function Layout() {
  const [busqueda, setBusqueda] = useState('')

  return (
    <div className="contenedor">
      <Sidebar />
      <main className="contenido-general">
      <OpcionesCrud />
      <Buscador setBusqueda={setBusqueda} />
      <ProductoLista busqueda={busqueda} />
      </main>
    </div>
  )
}

export default Layout