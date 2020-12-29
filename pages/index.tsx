import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Placeholder from "../components/Placeholder";
import InformationPlaceholder from "../components/InformationPlaceholder";
import Css from "../styles/common.module.css";
import DayPredictionInput from "../components/DayPredictionInput";
import { isNull } from "util";

const ChartComponent = dynamic(() => import("../components/ChartComponent"), {
  ssr: false,
});

const Container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  padding: "5%",
}

const optionsDate = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

export default function Home() {
  const [actualData, setActualData] = useState({day: null, positive: null});
  const [predictions, setPredictions] = useState({day: null, positive: null});
  const [daysPredict, setDaysPredict] = useState(30);
  const [daysPredictInput, setDaysPredictInput] = useState(30);
  const [loadingState, setLoadingState] = useState("Starting...");
  const [confirmedCase, setConfirmedCase] = useState(0)
  const [activeCase, setActiveCase] = useState(0)
  const [deathCase, setDeathCase] = useState(0)
  const [recoveredCase, setRecoveredCase] = useState(0)
  
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [daysPredict]);

  const fetchData = async () => {
    setLoadingState("Fetching Data from Api");
    const responseActualData = await fetchActualData();
    setCasesNumber(responseActualData, responseActualData.length-1);
    setLoadingState("Shaping Data");
    const covidCase = reformatResponseToBackendFormat(responseActualData, daysPredict);
    setLoadingState("Predicting Data");
    const predictData = await sendDataToBackend(covidCase, daysPredict);
    setLoadingState("Finishing");
    saveData(
      reformatListToObject(covidCase),
      reformatListToObject(predictData)
    );
  };

  const setCasesNumber = (arr: any[], index: number) => {
    if (arr[index].jumlahKasusKumulatif === null ||
      arr[index].jumlahPasienDalamPerawatan === null ||
      arr[index].jumlahPasienMeninggal === null ||
      arr[index].jumlahPasienSembuh === null) {
        setCasesNumber(arr, index-1);
        return;
      }
    setConfirmedCase(arr[index].jumlahKasusKumulatif)
    setActiveCase(arr[index].jumlahPasienDalamPerawatan)
    setDeathCase(arr[index].jumlahPasienMeninggal)
    setRecoveredCase(arr[index].jumlahPasienSembuh)
  }

  const fetchActualData = async () => {
    return await fetch(
      `${process.env.NEXT_PUBLIC_COVID_URL}/api/harian`
    )
      .then(async (data: any) => (await data.json()).data)
      .catch(() => []);
  };

  const optionPostFetch = (cases: any[], days_predict: number) => {
    return {
      method: "POST",
      body: JSON.stringify({
        cases,
        days_predict,
      }),
    };
  };

  const sendDataToBackend = async (covidData: any[], daysToPredict: number) => {
    return await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/get-predicted-result`,
      optionPostFetch(covidData, daysToPredict * 2)
    )
      .then(async (data) => await data.json())
      .catch(() => []);
  };

  const reformatResponseToBackendFormat = (rawData: any[], dataRemain: number) => {
    return rawData
      .filter(filterMoreThanDaysPredict)
      .map(dropNullCases);
  };

  const filterMoreThanDaysPredict = (value: any, index: number, arr: any[]) => {
    return index >= arr.length - daysPredict
  }

  const dropNullCases = (data: any, index: number, arr: any[]) => {
      return !isNullCase(data.jumlahKasusBaruperHari) ? {
        day: index+1,
        positive: data.jumlahKasusBaruperHari,
      }: {
        day: index+1,
        positive: arr[index-1].jumlahKasusBaruperHari,
      };
    }

  const isNullCase = (data) => {
    return data === null
  }

  const reformatListToObject = (arr: any[]) => {
    return {
      day: reformatDayList(changeDayIndexToDateFormat, arr),
      positive: reformatPositiveList(arr),
    };
  };

  const reformatDayList = (fun: any, arr: any[]) => {
    return arr.map(fun);
  };

  const reformatPositiveList = (arr: any[]) => {
    return arr.map((node) => node.positive);
  };

  const changeDayIndexToDateFormat = (data: any) => {
    return getFutureDate(data.day);
  };

  const getFutureDate = (day: number) => {
    const today = new Date();
    today.setDate(new Date().getDate() + day);
    return today.toLocaleString("id-ID", optionsDate).split(",")[0];
  };

  const saveData = (covidData: any, predictData: any) => {
    setActualData(covidData);
    setPredictions(predictData);
  };

  return (
    <div style={Container}>
      {!isNullCase(actualData.positive) ? (
        <div className={Css.gridContainer}>
          <InformationPlaceholder title="Terkonfirmasi" description={confirmedCase} style={{padding: "1rem", color: "white", background: "#fdb827", gridArea: "confirmed"}}/>
          <InformationPlaceholder title="Kasus Aktif" description={activeCase} style={{padding: "1rem", color: "white", background: "#c70039", gridArea: "active"}}/>
          <InformationPlaceholder title="Kasus Sembuh" description={recoveredCase} style={{padding: "1rem", color: "white", background: "#16c79a", gridArea: "recovered"}}/>
          <InformationPlaceholder title="Kasus Meninggal" description={deathCase} style={{padding: "1rem", color: "white", background: "#222831", gridArea: "death"}}/>
          <DayPredictionInput daysPredictInput={daysPredictInput} setDaysPredict={setDaysPredict} setDaysPredictInput={setDaysPredictInput}/>
          <ChartComponent actualData={actualData} predictions={predictions} />
        </div>
      ) : <Placeholder state={loadingState}/> }
    </div>
  );
}
