import { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from "react-router"
import { useEffect } from 'react'


function FormularioCrearPedido(){
    
    const [clientes, setClientes] = useState([])
    const [productos, setProductos] = useState([])

    const [clienteSeleccionado, setClienteSeleccionado] = useState('')
    const [itemsPedido, setItemsPedido] = useState([
    { sku_producto: '', cantidad: 1 }
    ])

    useEffect(() => {    //llama a las colecciones que se usaran en este formulario
    axios.get('http://localhost:3001/clientes')
        .then(res => setClientes(res.data))

    axios.get('http://localhost:3001/products')
        .then(res => setProductos(res.data))
    }, [])
    
    //funciones para el formulario: 
    const agregarProducto = () => {
    setItemsPedido([...itemsPedido, { sku_producto: '', cantidad: 1 }]) }

    const cambiarProducto = (index, campo, valor) => {
    const nuevosItems = [...itemsPedido]
    nuevosItems[index][campo] = valor
    setItemsPedido(nuevosItems)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
        const cliente = clientes.find(c => String(c._id) === String(clienteSeleccionado))
        if (!cliente) {
            alert('Selecciona un cliente válido.')
            return
        }

        const productosDetalle = itemsPedido.map(item => {
            const prodInfo = productos.find(p => p.sku === item.sku_producto)
            return {
            sku_producto: item.sku_producto,
            nombre_producto: prodInfo?.nombre || '',
            cantidad: item.cantidad,
            precio: prodInfo?.precio || 0
            }
        })

        const precio_total_pedido = productosDetalle.reduce(
            (total, item) => total + (item.precio * item.cantidad), 0)

            
            const randomNum = Math.floor(Math.random() * 1000) + 19
            await axios.post('http://localhost:3001/pedidos', {
                id_pedido: `WEB-${randomNum}`,
                cliente_id: clienteSeleccionado,
                nombre_cliente: cliente.nombre,
                apellido_cliente: cliente.apellido,
                productos: productosDetalle,
                precio_total_pedido
            })
            alert('Pedido creado con exito')

            setClienteSeleccionado('')
            setItemsPedido([{ sku_producto: '', cantidad: 1 }])
        
        }catch (error) {
            alert('Error al crear pedido:', error)
        }
    }
    
 return(
    <form onSubmit={handleSubmit} className="form-crear">

    <h2>Crear Pedido</h2>
    <label>Selecciona Cliente</label>
    <select
        value={clienteSeleccionado}
        onChange={e => setClienteSeleccionado(e.target.value)}
        required
    >
        <option value="">-- Selecciona --</option>
        {clientes.map(c => (
        <option key={c._id} value={c._id}>
            {c.nombre} {c.apellido}
        </option>
        ))}
    </select>

    <h3>Productos</h3>
    {itemsPedido.map((item, index) => (
        <div key={index} className="producto-item">
        <select
            value={item.sku_producto}
            onChange={e => cambiarProducto(index, 'sku_producto', e.target.value)}
            required
        >
            <option value="">-- Producto --</option>
            {productos.map(p => (
            <option key={p.sku} value={p.sku}>
                {p.nombre} (${p.precio})
            </option>
            ))}
        </select>

        <input
            type="number"
            min="1"
            value={item.cantidad}
            onChange={e => cambiarProducto(index, 'cantidad', Number(e.target.value))}
            placeholder="Cantidad"
            required
        />
        </div>
    ))}

    <button type="button" onClick={agregarProducto}>Agregar otro producto</button>
    <button type="submit">Crear Pedido</button>

    </form>
    )
}

export default FormularioCrearPedido