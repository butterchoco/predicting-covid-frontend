import Chart from "react-apexcharts";

export default function ChartComponent({ actualData, predictions }) {
  const series = [
    {
      name: "Predictions",
      data: predictions.positive,
    },
    {
      name: "Actual Data",
      data: actualData.positive,
    },
  ];

  return <div style={{gridArea: "prediction"}}>
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
          title: {
            text: "Tanggal",
          },
        },
        yaxis: {
          title: {
            text: "Jumlah Kasus per Hari",
          },
        },
      }}
      series={series}
      type="area"
      height={window.innerHeight / 2}
      width={window.innerWidth / 1.5}
    />
  </div>;
}
