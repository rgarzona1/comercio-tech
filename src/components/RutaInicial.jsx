import react from "react";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router";
import {AuthContext}  from '../context/AuthContext'
import { useContext } from "react";


function RutaInicial() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setIsAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate()
    

    useEffect(() => {
        const stored = localStorage.getItem('auth')
        if (stored === 'true') {
            setIsAuthenticated(true)
        }
        }, []
    )

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/login", { username, password })
        .then(res => {
            // Verifica la estructura de la respuesta
            if (res.data && res.data.message === 'Login exitoso') {
                setIsAuthenticated(true)
                localStorage.setItem('auth', 'true') // Guarda el estado de autenticación
                alert('Inicio de sesión exitoso')
                navigate('/clientes')
            } else {
                alert('Usuario o contraseña incorrectos') 
            }
        })
        .catch(err => {
            console.error('Error al iniciar sesión:', err)
            alert('Error al iniciar sesión')
        })
    }
    
    return (
        <div className="ruta-inicial">
        <h1>Bienvenido a Comercio Tech</h1>
        <form onSubmit={handleLogin}>
            <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            />
            <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            />
            <button type="submit">Iniciar Sesión</button>
        </form>
        </div>
    )
}
export default RutaInicial;
