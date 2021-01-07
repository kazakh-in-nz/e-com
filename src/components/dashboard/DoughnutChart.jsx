import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart({ doughnutChartData }) {
  let labels = [];
  let data = [];

  for (let aKey in doughnutChartData) {
    labels.push(aKey);
    data.push(doughnutChartData[aKey]);
  }

  let chartData = {
    labels: labels,
    datasets: [
      {
        label: "Average Population",
        backgroundColor: ["rgb(5, 162, 72)", "rgb(246, 4, 0)", "rgb(247, 100, 0)"],
        hoverBackgroundColor: ["rgb(5, 162, 72)", "rgb(246, 4, 0)", "rgb(247, 100, 0)"],
        data: data,
      },
    ],
  };

  return (
    <div>
      <Doughnut
        data={chartData}
        width={300}
        height={300}
        options={{
          title: {
            display: true,
            text: "Delivery Status",
            fontSize: 20,
          },
          legend: {
            display: false,
            position: "bottom",
          },
        }}
      />
    </div>
  );
}

export default React.memo(DoughnutChart);
