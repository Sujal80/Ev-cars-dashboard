import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

const PieChart = () => {
  const data = {
    labels: [
      "Tesla",
      "Ford",
      "Nissan",
      "Kia",
      "Bmw",
      "CHEVROLET",
      "AUDI",
      "VOLKSWAGEN",
      "TOYOTA",
    ],
    datasets: [
      {
        data: [23127, 2028, 3909, 1980, 2214, 3543, 1030, 1328, 1528],
        backgroundColor: [
          "rgb(2, 178, 175)",
          "rgb(114, 204, 255)",
          "rgb(218, 0, 255)",
          "rgb(144, 1, 203)",
          "rgb(46, 150, 255)",
          "rgb(65, 116, 166)",
          "rgb(214, 143, 234)",
          "rgb(201, 89, 232)",
          "rgb(162, 0, 207)",
        ],
        hoverBackgroundColor: [
          "rgb(2, 178, 175)",
          "rgb(114, 204, 255)",
          "rgb(218, 0, 255)",
          "rgb(144, 1, 203)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const chartStyle = {
    width: "300px",
    height: "300px",
    marginLeft: "auto",
    marginRight: "100px",
  };

  return (
    <div>
      <h2>Brands Marketcap</h2>
      <div style={chartStyle}>
        <Pie data={data} options={options} />{" "}
      </div>
    </div>
  );
};

export default PieChart;
