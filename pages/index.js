import { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";

const ChartComponent = dynamic(() => import("../components/ChartComponent"), {
  ssr: false,
});

export default function Home() {
  const [actualData, setActualData] = useState({});
  const [predictions, setPredictions] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const threadData = () => {
    try {
      setInterval(() => {
        fetchData();
      }, 2000);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchData = () => {
    axios
      .get("https://data.covid19.go.id/public/api/update.json")
      .then((response) => {
        const harian = response.data.update.harian;
        const result = { x: [], y: [] };
        const result2 = { x: [], y: [] };
        for (let i = harian.length - 30; i < harian.length; i++) {
          result.x.push(new Date(harian[i].key_as_string).toLocaleDateString());
          result.y.push(harian[i].jumlah_positif.value);
          result2.x.push(new Date(harian[i-30].key_as_string).toLocaleDateString());
          result2.y.push(harian[i-30].jumlah_positif.value);
        }
        console.log(result);
        setActualData(result);
        setPredictions(result2);
      })
      .catch((e) => {
        console.error(e);
      });
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
      <ChartComponent actualData={actualData} predictions={predictions}/>
    </div>
  );
}
