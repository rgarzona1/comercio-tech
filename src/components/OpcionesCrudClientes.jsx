import { Link } from "react-router"

function OpcionesCrudClientes() {
    return (        
    <section className="opciones-crud">
        <p>Administrar Clientes</p>
        <div className="productos">
            <Link to="/clientes/crear">   
                <button className="opciones">
                    <p className="texto-opciones-crud">CREAR</p>
                </button>
            </Link>

        </div>
    </section>
)
}

export default OpcionesCrudClientes;