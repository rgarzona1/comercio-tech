function Buscador( { setBusqueda }) {
    return (

        <section className="busqueda">
            <p>BUSCAR EN BASE DE DATOS</p>
            <input type="text" placeholder="Buscar..."  onChange={(e) => setBusqueda(e.target.value)}/>
            <button>Buscar</button>
             
        </section>

    )
}

export default Buscador