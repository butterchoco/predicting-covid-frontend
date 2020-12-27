import Chart from "react-apexcharts";

export default function ChartComponent({ actualData, predictions }) {
  const series = [
    {
      name: "Actual Data",
      data: actualData.positive,
    },
    {
      name: "Predictions",
      data: predictions.positive,
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
          categories: predictions.day,
        },
      }}
      series={series}
      type="area"
      stacked="false"
      height={window.innerHeight / 2}
      width={window.innerWidth / 1.15}
    />
  );
}
