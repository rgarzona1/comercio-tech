import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { AuthContext } from './context/AuthContext'
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './components/PrivateRoute'
import Layout from './components/Layout'
import RutaInicial from './components/RutaInicial'
import './styles/App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RutaInicial />} />

          <Route path="/*" element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
