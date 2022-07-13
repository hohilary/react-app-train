import React, { useCallback, useState} from "react";



const Table = (props) => {
  const { tableData, headerData, filterData, setFilterData } = props;
  // const [sortKey, setSortKey] = useState<SortKeys>();
  // const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");

  // type Data = typeof filterData
  // type SortKeys = keyof Data[0] 
  // type SortOrder = 'ascn' | 'desc'

  // function sortData({tableData, sortKey, reverse}:{
  //   tableData : Data;
  //   sortKey: any;
  //   reverse: boolean;
  // }) {
  //   return tableData; 
  // }

  // const sortedData = useCallback( () => sortData({ tableData: tableData, sortKey, reverse: sortOrder==="desc"}), [tableData, sortKey, sortOrder])

  const updateFilterData=(key, value)=> {
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

  const lineCodeBackground = (lineCode: string) => {
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

  const serviceTypeBackground = (serviceType: string) => {
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
