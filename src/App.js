import "./App.css";
import Table from "./table.tsx";
import { useEffect, useState } from "react";
import TableTest from "./components/Table";

function App() {
  const [data, setData] = useState(null);
  // const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  // for filter
  const [filters, setFilters] = useState(['NORMAL', 'UNKNOWN']);

  const handleFilter = (filter) => {
    filters.includes(filter)
      ? setFilters(filters.filter((value) => value !== filter))
      : setFilters(filters.concat(filter));
  };


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
  //   fetchData()
  // }, [])


  useEffect(() => {
    const intervalCall = setInterval(() => {
      fetchData();
    }, 7000);
    return () => {
      // clean up
      clearInterval(intervalCall);
    };
  }, []);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  // const newdata = data.filter((element, index) => {
  //   return element > 50
  // })

  // const data1 = {
    
  //   data: data.filter(
  //     (item) =>
  //       (filters.includes('NORMAL') && item.ServiceType === 'Normal') ||
  //       (filters.includes('UNKNOWN') && item.ServiceType === 'Unknown')
  //   ),
  // };
  // setData(data1);


  console.log('hey there')
  console.log(data)
  // // 👇️ filter with 1 condition
  const filtered = data? data.TrainPositions.filter(employee => {
    return employee.ServiceType === 'Unknown';
  }): data ;

  console.log('filtered');
  console.log(filtered);



  console.log("data");
  console.log(data);

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
        LineCode: 'RD',
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

  return (
    <div className="App">
      {/* {err && <h2>{err}</h2>} */}
      {/* {isLoading && <h2>Loading...</h2>} */}
      <h2>Train App</h2>

      <div className="table_container">
   <h1>Sortable table with React</h1>
   <TableTest/>
  </div>
{/*       
      <div>
        <label htmlFor="setup">
          Include SETUP:
          <input
            id="setup"
            type="checkbox"
            checked={filters.includes('SETUP')}
            onChange={() => handleFilter('SETUP')}
          />
        </label>
      </div>

      <div>
        <label htmlFor="learn">
          Include LEARN:
          <input
            id="learn"
            type="checkbox"
            checked={filters.includes('LEARN')}
            onChange={() => handleFilter('LEARN')}
          />
        </label>
      </div> */}

      {data && (
        <Table
          // TODO: change "temp_json" to "data"
          tableData={data.TrainPositions}
          headerData={[
            "Train ID",
            "Train No.",
            "Direction No.",
            "Car Count",
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
