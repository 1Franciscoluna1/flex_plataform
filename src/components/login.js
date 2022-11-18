import { Link } from "react-router-dom"

export default function Login() {
    return (
        <section className="vh-100" style={{backgroundColor: "#aaadb2"}}>
  <div className="container py-5 h-auto">
    <div className="row d-flex justify-content-center align-items-center h-100 mt-5">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong rounded-5">
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Inicio de Sesion</h3>
            
            <form method="post">

            <div className="form-outline mb-4">
              <input type="text" id="User" name="usuario" className="form-control form-control-lg" />
              <label className="form-label" for="User_lbl">Usuario</label>
            </div>

            <div className="form-outline mb-4">
              <input type="Password" id="Password" name="Password" className="form-control form-control-lg" />
              <label className="form-label" for="Password">Contraseña</label>
            </div>

            <Link className="btn btn-primary btn-lg w-100" type="submit" to={"/home"}>Login</Link>
            </form>

            <div className="mt-3 mb-3">
              <a href="/register" className="text-primary">Registrate</a>
            </div>
            
            <div className="mt-3">
              <h4 className="autor">
                Hecho por Francisco Luna
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)
}