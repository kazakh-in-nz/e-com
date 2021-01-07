import React from "react";
import { Bar } from "react-chartjs-2";

const weekDays = { 1: "Mon", 2: "Tue", 3: "Wed", 4: "Thu", 5: "Fri", 6: "Sat", 0: "Sun" };
const xAxis = [];
const chartData = [];

function BarChart({ barChartData, lastWeek }) {
  console.log(barChartData, lastWeek);

  if (barChartData.length !== 0 && lastWeek.length !== 0) {
    if (xAxis.length > 0) xAxis.length = 0;
    if (chartData.length > 0) chartData.length = 0;
    for (let aDay in lastWeek) {
      let aDate = `${lastWeek[aDay].getDate()}/${lastWeek[aDay].getMonth() + 1}/${lastWeek[aDay].getFullYear()}`;
      let aWeekDay = weekDays[lastWeek[aDay].getDay()];
      xAxis.push(`${aWeekDay} (${aDate})`);
      let income = barChartData.reduce((accum, item) => {
        if (item.purchaseOn === aDate) return (accum += item.amount);
        return accum;
      }, 0);
      chartData.push(income);
    }
  } else {
    return <div>No Sales Last Week</div>;
  }

  let chartSettings = {
    labels: xAxis,
    datasets: [
      {
        label: "Last week sales",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: chartData,
      },
    ],
  };

  return (
    <div>
      <Bar
        data={chartSettings}
        height={300}
        width={600}
        options={{
          title: {
            display: true,
            text: chartSettings.datasets[0].label,
            fontSize: 20,
          },
          legend: {
            display: false,
            position: "right",
          },
        }}
      />
    </div>
  );
}

export default React.memo(BarChart);
