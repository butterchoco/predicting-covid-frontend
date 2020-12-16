import Chart from "react-apexcharts";
import { useEffect, useState } from "react";

export default function ChartComponent({ actualData, predictions }) {
  const [actualDataChart, setActualDataChart] = useState({});
  const [predictionsChart, setPredictionsChart] = useState({});

  useEffect(() => {
    setActualDataChart(actualData);
    setPredictionsChart(predictions);
  }, [actualData, predictions]);

  const series =
    actualData.y !== undefined && predictions.y !== undefined
      ? [
          {
            name: "Actual Data",
            data: actualDataChart.y,
          },
          {
            name: "Predictions",
            data: predictionsChart.y,
          },
        ]
      : [
          {
            name: "Actual Data",
            data: [],
          },
          {
            name: "Predictions",
            data: [],
          },
        ];

  return (
    <Chart
      options={{
        chart: {
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true,
          },
          toolbar: {
            autoSelected: "zoom",
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
        },
        title: {
          text: "Covid Predictions",
          align: "center",
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
        xaxis: {
          categories: actualDataChart.x,
        },
      }}
      series={series}
      type="area"
      stacked="false"
      height={window.innerHeight / 2}
      width={window.innerWidth / 2}
    />
  );
}
