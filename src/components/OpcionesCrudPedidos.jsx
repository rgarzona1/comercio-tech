import { Link } from "react-router"

function OpcionesCrudPedidos() {
    return (        
    <section className="opciones-crud">
        <p>Administrar Pedidos</p>
        <div className="pedidos">
            <Link to="/pedidos/crear">   
                <button className="opciones">
                    <p className="texto-opciones-crud">CREAR</p>
                </button>
            </Link>

        </div>
    </section>
)
}

export default OpcionesCrudPedidos;