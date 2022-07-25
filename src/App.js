import logo from "./logo.svg";
import "./App.css";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";

const myData = [
  {
    schoolYear: "2019-2020",
    labels: ["Học kì 1", "Học kì 2", "Học kì 3"],
    datasets: [
      {
        id: 1,
        label: "Toán",
        data: [5, 6, 7],
        backgroundColor: "purple",
        datalabels: {
          anchor: "end",
          align: "top",
          color: "blue",
          labels: {
            title: {
              font: {
                weight: "bold",
              },
            },
            value: {
              color: "green",
            },
          },
        },
      },
      {
        id: 2,
        label: "Văn",
        data: [7, 9, 4],
        backgroundColor: "pink",
      },
    ],
  },
  {
    schoolYear: "2020-2021",
    labels: ["Học kì 1", "Học kì 2", "Học kì 3"],
    datasets: [
      {
        id: 1,
        label: "Toán",
        data: [8, 6, 4],
        backgroundColor: "purple",
      },
      {
        id: 2,
        label: "Văn",
        data: [7, 4, 9],
        backgroundColor: "pink",
      },
    ],
  },
  {
    schoolYear: "2021-2022",
    labels: ["Học kì 1", "Học kì 2", "Học kì 3"],
    datasets: [
      {
        id: 1,
        label: "Toán",
        data: [8, 6, 4],
        backgroundColor: "purple",
      },
      {
        id: 2,
        label: "Văn",
        data: [7, 4, 8],
        backgroundColor: "pink",
      },
    ],
  },
];

function App() {
  Chart.register(ChartDataLabels);
  const [myPoint, setMyPoint] = useState(myData[0]);

  return (
    <>
      <select
        onChange={(e) => {
          let itemSelected = myData.filter(
            (item) => item.schoolYear == e.target.value
          )[0];
          setMyPoint(itemSelected);
        }}
      >
        {myData.map((item) => (
          <option key={item.schoolYear}>{item.schoolYear}</option>
        ))}
      </select>
      <Bar datasetIdKey="id" data={myPoint} />
    </>
  );
}

export default App;
