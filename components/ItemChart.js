//Kika på charts dokumentation
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

export default function ItemChart({ data }) {
  const dates = Object.keys(data.daily).map((timestamp) =>
    new Date(Number(timestamp)).toLocaleDateString()
  );
  const dailyPrices = Object.values(data.daily);
  const averagePrices = Object.values(data.average);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: "Daily Prices",
        data: dailyPrices,
        borderColor: "rgb(75, 192, 192)",
      },
      {
        label: "Average Prices",
        data: averagePrices,
        borderColor: "rgb(153, 102, 255)",
      },
    ],
  };

  return <Line data={chartData} />;
}
