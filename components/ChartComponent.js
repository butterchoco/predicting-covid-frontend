import Chart from "react-apexcharts";

export default function ChartComponent({ actualData, predictions }) {
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
          categories: actualData.x,
        },
      }}
      series={[
        {
          name: "Actual Data",
          data: actualData.y,
        },
        {
          name: "Predictions",
          data: predictions.y,
        },
      ]}
      type="area"
      stacked="false"
      height={window.innerHeight / 2}
      width={window.innerWidth / 2}
    />
  );
}
