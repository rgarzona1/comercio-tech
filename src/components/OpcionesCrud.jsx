import { Link } from "react-router"

function OpcionesCrud() {
    return (        
    <section className="opciones-crud">
        <p>Administrar Base de Datos</p>
        <div className="productos">
            <Link to="/productos/crear">
                <button className="opciones">
                    <p className="texto-opciones-crud">CREAR</p>
                </button>
            </Link>

            <button className="opciones">
                <p className="texto-opciones-crud">BUSCAR</p>
            </button>
        </div>
    </section>
)
}

export default OpcionesCrud;