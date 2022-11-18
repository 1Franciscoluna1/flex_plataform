import { Link } from "react-router-dom"

export default function barr_nav() {
    return (
                <div className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <nav className="ms-4 m-lg-2">
            <Link className="navbar-brand" to={"/home"}>"USER_NAME"</Link>
        </nav>
            <ul className="navbar-nav">
                <li className="nav-item active m-2">
                    <Link className="nav-link" to={"/metrics"}>Metricos</Link>
                </li>
                <li className="nav-item active m-2">
                    <Link className="nav-link" to={"/addTLA"}>Agregar TLA</Link>
                </li>
                <li className="nav-item active m-2">
                    <Link className="nav-link" to={"/addPCB"}>Agregar PCB</Link>
                </li>
                <li className="nav-item active m-2">
                    <Link className="nav-link" to={"/Concentrado"}>Concentrado</Link>
                </li>
            </ul>
            <li className="navbar-nav nav-item active me-5 ms-auto">
                    <Link to={"/"} className="nav-link">Cerrar Sesion</Link>
            </li>
    </div>
)
}