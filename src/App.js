import "./App.css";
import Table from "./table.tsx";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filterData, setFilterData] = useState({
    TrainId: undefined,
    TrainNumber: undefined,
    CarCount: undefined,
    DirectionNum: undefined,
    CircuitId: undefined,
    DestinationStationCode: undefined,
    LineCode: undefined,
    SecondsAtLocation: undefined,
    ServiceType: undefined,
  });
  const [orderData, setOrderData] = useState({
    isAscn: true,
    key: undefined
  })


  const [err, setErr] = useState("");

  const requestOptions = {
    method: "GET",
    mode: "cors",
  };

  const contentType = "application/json";
  const api_key = "e13626d03d8e4c03ac07f95541b3091b";

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.wmata.com/TrainPositions/TrainPositions?contentType=${contentType}&api_key=${api_key}`,
        requestOptions
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const intervalCall = setInterval(() => {
      fetchData();
    }, 7000);
    return () => {
      clearInterval(intervalCall);
    };
  }, []);

  const tableData = () => {
    return data.TrainPositions.filter((row)=>filterByInput(row));
  };

  const orderByKey = (data) => {
    if (orderData["key"] !== undefined) {
      return data.sort((a, b) => {
        if (orderData["isAscn"]) {
          return a[orderData["key"]] > b[orderData["key"]] ? 1 : -1;
        } else {
          return a[orderData["key"]] < b[orderData["key"]] ? 1 : -1;
        }
      });
    }
    return data
  }
  const filterByInput = (row) => {
    let toShow = true;
    Object.keys(filterData).forEach((key) => {
      
      if (filterData[key] !== undefined && filterData[key] !== "") {
        toShow = false;
        if (
          row[key] !== "" &&
          row[key] !== undefined &&
          row[key] !== null &&
          row[key].toString().includes(filterData[key].toString())
        ) {
          toShow = true;
        }
      }
    });
    return toShow;
  };

  return (
    <div className="App">
      {isLoading && <h2>Loading...</h2>}
      {data && (
        <Table
          filterData={filterData}
          setFilterData={setFilterData}
          orderData={orderData}
          setOrderData={setOrderData}
          tableData={orderByKey(tableData())}
          headerData={[
            "Train ID",
            "Train No.",
            "Car Count",
            "Direction No.",
            "Circuit ID",
            "Destination Station Code",
            "Line Code",
            "Seconds At Location",
            "Service Type",
          ]}
        />
      )}
    </div>
  );
}

export default App;