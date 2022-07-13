import React, { useEffect } from "react";



const Table = (props) => {
  const { tableData, headerData, filterData, setFilterData } = props;

  const columns = [
    { label: "Full Name", accessor: "full_name" },
    { label: "Email", accessor: "email" },
    { label: "Gender", accessor: "gender" },
    { label: "Age", accessor: "age" },
    { label: "Start date", accessor: "start_date" },
   ];
  



  let carCount = [... new Set(tableData.map((train)=>train.CarCount))]
  
  const updateFilterData=(key, value)=> {
    // console.log( idx, value)
    
    setFilterData({...filterData, [key]: String(value)})
  }
  const tableHeader = () => {
    return headerData.map((data, idx) => {
      return <th key={idx}>{data}</th>;
    });
  };
  const tableSearchHeader = () => {
    return Object.keys(filterData).map((key, idx) => {
      return <th key={idx}><input type="text" id="fname" onChange={(e)=> updateFilterData(key, e.target.value)}></input></th>;
    });
  };
//   const lineCode = ["RD", "BL", "YL", "OR", "GR", "SV"];

  const lineCodeBackground = (lineCode) => {
    switch (lineCode) {
      case "RD":
        return "background-red";
      case "BL":
        return "background-blue";
      case "YL":
        return "background-yellow";
      case "OR":
        return "background-orange";
      case "GR":
        return "background-green";
      case "SV":
        return "background-silver";
      default:
        return "";
    }
  };

  const serviceTypeBackground = (serviceType) => {
    switch (serviceType) {
      case "NoPassengers":
        return "background-nopassengers";
      case "Normal":
        return "background-green";
      case "Special":
        return "background-orange";
      case "Unknown":
        return "background-silver";
      default:
        return "";
    }
  };


  const returnTableData = () => {
    return tableData.map((train, idx) => {
      //   const { id, title, completed } = todos;
      return (
        <tr data-id={train.TrainId} key={train.TrainId}>
          <td>{train.TrainId}</td>
          <td>{train.TrainNumber}</td>
          <td>{train.CarCount}</td>
          <td>{train.DirectionNum}</td>
          <td>{train.CircuitId}</td>
          <td>{train.DestinationStationCode}</td>
          <td className={lineCodeBackground(train.LineCode)}>
            {train.LineCode}
          </td>
          <td>{train.SecondsAtLocation}</td>
          <td className={serviceTypeBackground(train.ServiceType)}>{train.ServiceType}</td>
        </tr>
      );
    });
  };



  return (
    <>
      <table>
        <thead>
          <tr>{tableHeader()}</tr>
          <tr>{tableSearchHeader()}</tr>
        </thead>
        <tbody>{returnTableData()}</tbody>
      </table>
    </>
  );
};

export default Table;
