import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function grafica() {

    const data = {
        labels: ["30-0142", "30-0150","30-0141","30-0150"],
        datasets: [
        {
            label: "31-0142",
            backgroundColor: ["#090979","#0fae6b"],
            borderColor: "black",
            borderWidth: 1,
            hoverBackground: "red",
            hoverBorderColor: "#bfc80b",
            data: [25,15,8,2]
        }
        ]
    }

    const opciones = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    }
    
    let currentDate = new Date().toISOString().slice(0, -8);

    return (
    <div>
            <div className="container mt-4">
                <div className="row">
            <div class="input-group mb-3 w-50">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Fecha de inicio</span>
                </div>
                        <input type="datetime-local" className="form-control" name="active_date" id="active_date" value={{currentDate}} />
                </div>
            <div class="input-group mb-3 w-50">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Fecha de final</span>
                </div>
                <input type="datetime-local" className="form-control" name="fecha_final"/>
            </div>        

                </div>
                </div>
        <div className="w-100" style={{ height: "400px" }} >
            <Bar data={ data } options={opciones} />
        </div>
    </div>
)
}