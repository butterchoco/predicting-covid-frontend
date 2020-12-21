import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ChartComponent = dynamic(() => import("../components/ChartComponent"), {
  ssr: false,
});

export default function Home() {
  const [actualData, setActualData] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const [daysPredict, setDaysPredict] = useState(30);

  useEffect(() => {
    fetchData();
    setInterval(fetchData, 5000);
  }, []);

  const fetchData = async () => {
    const responseActualData = fetchActualData();
    const slicedCovidData = sliceData(responseActualData, daysPredict);
    const covidCase = reformatResponseToBackendFormat(slicedCovidData)
    const predictData = sendDataToBackend(covidCase, daysPredict)
    saveData(reformatToObject(covidCase), reformatToObject(predictData));
  };

  const fetchActualData = () => {
    let covidData;
    try {
      const fetchCovid = await fetch(
        `${process.env.NEXT_PUBLIC_COVID_URL}/update.json`
      );
      covidData = (await fetchCovid.json()).update.harian;
    } catch (e) {
      covidData = [];
    }
    return covidData;
  }

  const sendDataToBackend = (covidData, daysToPredict) => {
    let predictData;
    try {
      const fetchPredict = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-predicted-result`,
        {
          method: "POST",
          body: JSON.stringify({
            cases: covidData,
            days_predict: daysToPredict,
          }),
        }
      );
      predictData = await fetchPredict.json();
    } catch (e) {
      predictData = [];
    }
    return predictData
  }

  const sliceData = (arr, dataRemain) => {
    const clone = [...arr];
    clone.splice(0, covidData.length - dataRemain);
    return clone;
  };

  const reformatResponseToBackendFormat = (rawData) => {
    return rawData.map((data, index) => {
      return {
        day: index + 1,
        positive: data.jumlah_positif.value,
      };
    });
  }

  const reformatToObject = (data) => {
    const day = data.map((node) => {
      return node.day;
    });
    const positive = data.map((node) => {
      return node.positive;
    });
    return { day: day, positive: positive };
  };

  const saveData = (covidData, predictData) => {
    setActualData(covidData);
    setPredictions(predictData);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {actualData.length !== 0 && predictions.length !== 0 ? (
        <ChartComponent actualData={actualData} predictions={predictions} />
      ) : null}
    </div>
  );
}
