import { Link } from "react-router-dom";

export default function registro() {
    return (
        <section className="vh-100" style={{backgroundColor: "#aaadb2"}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-baseline h-100">
                    <div className="col-12">
                        <div className="card shadow-sm" style={{borderradius: "1rem"}}>
                            <div className="card-body p-5 text-center">
                                <div className="row">
                                    <div className="text-left w-25 ms-3">
                                        <Link className="btn btn-outline-info btn-lg" to={"/"}>Regresar</Link>
                                    </div>
                                    <div className="text-center w-50">
                                        <h3 className="mb-4 justify-content-center">Registro de Usuario</h3>
                                    </div>
                                </div>
                                <form method="post" className="mt-4">
                                    <div className="mb-4">
                                        <input name="user" id="user" className="text-uppercase form-control form-control-lg mb-4" type="text" placeholder="Usuario (GDL)" />
                                        <input type="number" name="nomina" id="nomina" className="form-control form-control-lg" placeholder="Numero de nomina" />
                                    </div>
                                    <div className="mb-4">
                                        <input type="password" name="password" id="password" className="form-control form-control-lg mb-4" placeholder="Contraseña" />
                                        <input type="password" name="conf_password" id="conf_password" className="form-control form-control-lg mb-4" placeholder="Confirmar Contraseña" />
                                    </div>
                                    <div className="mb-4">
                                        <input type="text" className="mb-4 form-control form-control-lg" name="nombre" id="nombre" placeholder="Nombre(s)"></input>
                                        <input type="text" name="apellidos" id="apellidos" placeholder="Apellidos" className="form-control form-control-lg"></input>
                                    </div>
                                    <div className="mt-3">
                                        <Link type="submit" className="btn btn-outline-primary btn-lg" to={"/"}>Registrarse</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
)}