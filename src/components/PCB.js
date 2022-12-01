export default function PCB() {
return (
           <section className=" " style={{ backgroundColor: "#aaadb2" }}>
        <div className="container py-5 h-100">
         <div className="row d-flex justify-content-center align-baseline h-100">
          <div className="col-lg-12">
           <div className="card" style={{borderradius: "1rem"}}>
            <div className="card-body p-5 text-center">
             <div className="row">
                <div className="text-center w-100">
                    <h3 className="mb-4 titulo_registro justify-content-center">Registro de PCB</h3>
                </div>
            </div>
                <form action="" method="post">
                    <div className="mb-4">
                        <div className="text-start">
                            <label className="h5 ml-2">SN PCB</label>
                        </div>
                        <input type="text" name="SN" id="SN" className="text-uppercase form-control form-control-lg mb-4" placeholder="SN Sub ensamble dañado"/>
                    </div>
                    <div className="mb-4">
                        <div className="text-start">
                            <label className="h5 ml-2">PN PCB</label>
                        </div>
                        <input type="text" name="PN" id="PN" className="text-uppercase form-control form-control-lg mb-4" disabled placeholder="PN Sub ensamble dañado"/>
                    </div>
                    <div className="row">
                        <div className="w-50">
                            <div className="m-4">
                                <div className="text-start">
                                    <label className="h5 ml-2">Prueba de Falla</label>
                                </div>
                                <div className="input-group mb-3">
                                      <select className="custom-select form-control form-control-lg" id="Estacion_Fail">
                                        <option selected disabled>Seleccione una...</option>
                                        <option value="1">Boot</option>
                                        <option value="2">Gtest</option>
                                        <option value="3">RF_Init</option>
                                        <option value="4">PDA</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="w-50">
                            <div className="m-4">
                                <div className="text-start">
                                    <label className="h5 ml-2">Defecto</label>
                                </div>
                                <div className="input-group mb-3">
                                      <select className="custom-select form-control form-control-lg" id="Mode_Fail">
                                        <option selected disabled>Seleccione una...</option>
                                        <option value="1">Desprendido</option>
                                        <option value="2">Falso rechazo</option>
                                        <option value="3">Daño Fisico</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-outline-success btn-lg form-control mt-3">Enviar</button>
                </form>
            </div>
           </div>
          </div>
         </div>
        </div>
    </section>
)
}