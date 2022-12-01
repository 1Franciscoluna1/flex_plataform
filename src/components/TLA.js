export default function TLA() {
return (
            <section className="" style={{ backgroundColor: "#aaadb2" }}>
        <div className="container py-5 h-100">
         <div className="row d-flex justify-content-center align-baseline h-100">
          <div className="col-lg-12">
           <div className="card" style={{borderradius: "1rem"}}>
            <div className="card-body p-5 text-center">
             <div className="row">
                <div className="text-center w-100">
                    <h3 className="mb-4 titulo_registro justify-content-center">Registro de TLA</h3>
                </div>
            </div>
                <form action="" method="post">
                    <div className="mb-4">
                        <div className="text-start">
                            <label className="h5 ml-2">Numero de Serie TLA</label>
                        </div>
                        <input type="text" name="SN" id="SN" className="text-uppercase form-control form-control-lg mb-4" placeholder="Numero de Serie"/>
                    </div>
                    <div className="mb-4">
                        <div className="text-start">
                            <label className="h5 ml-2">Numero de Parte TLA</label>
                        </div>
                        <input type="text" name="PN" id="PN" className="text-uppercase form-control form-control-lg mb-4" disabled placeholder="Numero de Parte"/>
                    </div>
                    <div className="mb-4">
                        <div className="text-start">
                            <label className="h5 ml-2">SN Sub ensamble dañado</label>
                        </div>
                        <input type="text" name="SN" id="SN" className="text-uppercase form-control form-control-lg mb-4" placeholder="SN Sub ensamble dañado"/>
                    </div>
                    <div className="mb-4">
                        <div className="text-start">
                            <label className="h5 ml-2">PN Sub ensamble dañado</label>
                        </div>
                        <input type="text" name="PN" id="PN" className="text-uppercase form-control form-control-lg mb-4" disabled placeholder="PN Sub ensamble dañado"/>
                    </div>
                    <div className="row">
                        <div className="w-50">
                            <div className="m-4">
                                <div className="text-start">
                                    <label className="h5 ml-2">Estacion</label>
                                </div>
                                <div className="input-group mb-3">
                                      <select className="custom-select form-control form-control-lg" id="Estacion_Fail">
                                        <option selected disabled>Seleccione una...</option>
                                        <option value="1">SSA</option>
                                        <option value="2">SYS</option>
                                        <option value="3">Leak Test</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="w-50">
                            <div className="m-4">
                                <div className="text-start">
                                    <label className="h5 ml-2">Modo de Falla</label>
                                </div>
                                <div className="input-group mb-3">
                                      <select className="custom-select form-control form-control-lg" id="Mode_Fail">
                                        <option selected disabled>Seleccione una...</option>
                                        <option value="1">Boot</option>
                                        <option value="2">Antenna</option>
                                        <option value="3">Calink</option>
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