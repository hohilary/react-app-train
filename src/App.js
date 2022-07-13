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

  // useEffect(() => {
  //   const intervalCall = setInterval(() => {
  //     fetchData();
  //   }, 7000);
  //   return () => {
  //     // clean up
  //     clearInterval(intervalCall);
  //   };
  // }, []);

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);


  const temp_json = {
    TrainPositions: [
      {
        TrainId: "008",
        TrainNumber: "000",
        CarCount: 0,
        DirectionNum: 1,
        CircuitId: 1487,
        DestinationStationCode: null,
        LineCode: "RD",
        SecondsAtLocation: 54194,
        ServiceType: "Unknown",
      },
      {
        TrainId: "009",
        TrainNumber: "000",
        CarCount: 0,
        DirectionNum: 2,
        CircuitId: 1488,
        DestinationStationCode: null,
        LineCode: "BL",
        SecondsAtLocation: 54194,
        ServiceType: "Unknown",
      },
      {
        TrainId: "010",
        TrainNumber: "000",
        CarCount: 0,
        DirectionNum: 1,
        CircuitId: 1656,
        DestinationStationCode: null,
        LineCode: "GR",
        SecondsAtLocation: 54194,
        ServiceType: "Unknown",
      },
      {
        TrainId: "011",
        TrainNumber: "000",
        CarCount: 0,
        DirectionNum: 2,
        CircuitId: 1657,
        DestinationStationCode: null,
        LineCode: "SV",
        SecondsAtLocation: 54194,
        ServiceType: "Special",
      },
      {
        TrainId: "046",
        TrainNumber: "000",
        CarCount: 0,
        DirectionNum: 2,
        CircuitId: 1701,
        DestinationStationCode: null,
        LineCode: "OR",
        SecondsAtLocation: 54194,
        ServiceType: "Unknown",
      },
      {
        TrainId: "051",
        TrainNumber: "000",
        CarCount: 0,
        DirectionNum: 1,
        CircuitId: 1683,
        DestinationStationCode: null,
        LineCode: "YL",
        SecondsAtLocation: 35402,
        ServiceType: "Unknown",
      },
      {
        TrainId: "055",
        TrainNumber: "PM47",
        CarCount: 0,
        DirectionNum: 1,
        CircuitId: 1638,
        DestinationStationCode: null,
        LineCode: null,
        SecondsAtLocation: 54194,
        ServiceType: "Normal",
      },
      {
        TrainId: "161",
        TrainNumber: "000",
        CarCount: 6,
        DirectionNum: 1,
        CircuitId: 2581,
        DestinationStationCode: null,
        LineCode: null,
        SecondsAtLocation: 2471,
        ServiceType: "Special",
      },
      {
        TrainId: "164",
        TrainNumber: "708",
        CarCount: 6,
        DirectionNum: 1,
        CircuitId: 3201,
        DestinationStationCode: null,
        LineCode: null,
        SecondsAtLocation: 1,
        ServiceType: "NoPassengers",
      },
      {
        TrainId: "193",
        TrainNumber: "703",
        CarCount: 6,
        DirectionNum: 1,
        CircuitId: 2807,
        DestinationStationCode: null,
        LineCode: null,
        SecondsAtLocation: 17,
        ServiceType: "NoPassengers",
      },
      {
        TrainId: "218",
        TrainNumber: "000",
        CarCount: 0,
        DirectionNum: 1,
        CircuitId: 1531,
        DestinationStationCode: null,
        LineCode: "RD",
        SecondsAtLocation: 54194,
        ServiceType: "Unknown",
      },
      {
        TrainId: "219",
        TrainNumber: "000",
        CarCount: 0,
        DirectionNum: 1,
        CircuitId: 1543,
        DestinationStationCode: null,
        LineCode: null,
        SecondsAtLocation: 54194,
        ServiceType: "Unknown",
      },
    ],
  };

  const tableData = () => {
    return temp_json.TrainPositions.filter((row)=>filterByInput(row));
  };
  const filterByInput = (row) => {
    let toShow = true;
    Object.keys(filterData).forEach((key) => {
      console.log('hahahahahaha')
      
      if (filterData[key] !== undefined && filterData[key] !== "") {
        toShow = false;
        console.log("filter", key);
        console.log(filterData[key])
        console.log('fired data')
        
        console.log(row)
        console.log(row[key])
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
    console.log(toShow);
    return toShow;
  };

  return (
    <div className="App">
      {/* {err && <h2>{err}</h2>} */}
      {isLoading && <h2>Loading...</h2>}
      {temp_json && (
        <Table
          // TODO: change "temp_json" to "data"
          filterData={filterData}
          setFilterData={setFilterData}
          tableData={tableData()}
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
