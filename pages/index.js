import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ChartComponent = dynamic(() => import("../components/ChartComponent"), {
  ssr: false,
});

export default function Home() {
  const [actualData, setActualData] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const [daysPredict, setDaysPredict] = useState(30);
  const optionsDate = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  useEffect(() => {
    fetchData();
    setInterval(fetchData, 10000);
  }, []);

  const fetchData = async () => {
    const responseActualData = await fetchActualData();
    const slicedCovidData = sliceData(responseActualData, daysPredict);
    const covidCase = reformatResponseToBackendFormat(slicedCovidData);
    const predictData = await sendDataToBackend(covidCase, daysPredict);
    saveData(
      reformatListToObject(covidCase),
      reformatListToObject(predictData)
    );
  };

  const fetchActualData = async () => {
    return await fetch(
      `https://cors-anywhere.herokuapp.com/${process.env.NEXT_PUBLIC_COVID_URL}/public/api/update.json`,
      {
        origin: process.env.NEXT_PUBLIC_FRONTEND_URL,
      }
    )
      .then(async (data) => (await data.json()).update.harian)
      .catch(() => []);
  };

  const optionPostFetch = (cases, days_predict) => {
    return {
      method: "POST",
      body: JSON.stringify({
        cases,
        days_predict,
      }),
    };
  };

  const sendDataToBackend = async (covidData, daysToPredict) => {
    return await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-predicted-result`,
      optionPostFetch(covidData, daysToPredict * 2)
    )
      .then(async (data) => await data.json())
      .catch(() => []);
  };

  const sliceData = (arr, dataRemain) => {
    const clone = [...arr];
    clone.splice(0, arr.length - dataRemain);
    return clone;
  };

  const reformatResponseToBackendFormat = (rawData) => {
    return rawData.map((data, index) => {
      return {
        day: index,
        positive: data.jumlah_positif.value,
      };
    });
  };

  const reformatListToObject = (arr) => {
    return {
      day: reformatDayList(changeDayIndexToDateFormat, arr),
      positive: reformatPositiveList(arr),
    };
  };

  const reformatDayList = (fun, arr) => {
    return arr.map(fun);
  };

  const reformatPositiveList = (arr) => {
    return arr.map((node) => node.positive);
  };

  const changeDayIndexToDateFormat = (data) => {
    const today = new Date();
    today.setDate(new Date().getDate() + data.day);
    return today.toLocaleString("id-ID", optionsDate).split(",")[0];
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
