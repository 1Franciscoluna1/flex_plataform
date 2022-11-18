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
        labels: ["31-0142", "31-150", "31-0141", "31-0134"],
        datasets: [{
        label: "Cantidades",
        backgroundColor: "#bfc80b",
        borderColor: "black",
        borderWidth: 1,
        hoverBackground: "red",
        hoverBorderColor: "#bfc80b",
        data: [2, 8, 4, 15],
        }
        ,
        {
        label: "Retest",
        background: "yellow",
        borderColor: "black",
        borderWidth: 1,
        hoverBackground: "red",
        hoverBorderColor: "#bfc80b",
        data: [10, 3, 8, 1],
        }
        ]
    }

    

    const opciones = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {   
            Legend: {
                Display: false
            }
        }
    }

return (
    <div className="w-100" style={{ height: "400px" }} >
        <Bar data={ data } options={opciones} />
    </div>
)
}