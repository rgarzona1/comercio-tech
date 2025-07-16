import { Link } from "react-router"

function OpcionesCrudProducto() {
    return (        
    <section className="opciones-crud">
        <p>Administrar Productos</p>
        <div className="productos">
            <Link to="/productos/crear">   
                <button className="opciones">
                    <p className="texto-opciones-crud">CREAR</p>
                </button>
            </Link>

        </div>
    </section>
)
}

export default OpcionesCrudProducto;