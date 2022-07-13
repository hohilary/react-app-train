import "./App.css";
import Table from "./table";
import { useEffect, useState } from "react";

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
  useEffect(() => {
    fetchData()
  }, [])

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

  return (
    <div className="App">
      {err && <h2>{err}</h2>}
      {isLoading && <h2>Loading...</h2>}
      <h2>Train App</h2>
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
      </div>

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
