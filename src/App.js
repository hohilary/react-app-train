import './App.css';
import Table from './table';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState(null);  
  // const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const requestOptions = {
        method: "GET",
        mode: "cors",
        // headers: { "Content-Type": "application/json
      };

      const contentType = 'application/json'
      const api_key = 'e13626d03d8e4c03ac07f95541b3091b'

  
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/todos')
    fetch(`https://api.wmata.com/TrainPositions/TrainPositions?contentType=${contentType}&api_key=${api_key}`, requestOptions)
      .then(response => response.json())
      .then(json => setData(json))
  }, []);

  const temp_json = {
        TrainPositions: [
          {
            TrainId: "008",
            TrainNumber: "000",
            CarCount: 0,
            DirectionNum: 1,
            CircuitId: 1487,
            DestinationStationCode: null,
            LineCode: null,
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
            LineCode: null,
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
            LineCode: null,
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
            LineCode: null,
            SecondsAtLocation: 54194,
            ServiceType: "Unknown",
          },
          {
            TrainId: "046",
            TrainNumber: "000",
            CarCount: 0,
            DirectionNum: 2,
            CircuitId: 1701,
            DestinationStationCode: null,
            LineCode: null,
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
            LineCode: null,
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
            ServiceType: "Unknown",
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
            ServiceType: "Unknown",
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
            LineCode: null,
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

  useEffect(() => {
    console.log(data);
  }, [data]);


  // const fetchData = async () => {
  //   setIsLoading(true);

  //   try {
  //     const requestOptions = {
  //       method: "GET",
  //       mode: "cors",
  //       // headers: { "Content-Type": "application/json" },
  //     };

  //     const contentType = 'application/json'
  //     const api_key = 'e13626d03d8e4c03ac07f95541b3091b'

  //     const response = await fetch(`https://api.wmata.com/TrainPositions/TrainPositions?contentType=${contentType}&api_key=${api_key}`, requestOptions);

  //     if (!response.ok) {
  //       throw new Error(`Error! status: ${response.status}`);
  //     }
  //     const result = await response.json();
  //     // console.log("result is: ", JSON.stringify(result, null, 4));

  //     setData(result);
  //   } catch (err) {
  //     setErr(err.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  
  console.log('data')
  console.log(data)

  console.log('temp_json')
  console.log(temp_json)

  return (
    <div className="App">
      {err && <h2>{err}</h2>}
      {isLoading && <h2>Loading...</h2>}
      {
        temp_json && 
        <Table
        // TODO: change "temp_json" to "data"
          tableData = {temp_json.TrainPositions}
          headerData = {['Train ID', 'Train No.', 'Direction No.', 'Car Count', 'Circuit ID', 'Destination Station Code', 'Line Code', 'Seconds At Location', 'Service Type']}
        />
      }
    </div>
  );
}

export default App;