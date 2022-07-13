import React, { useEffect } from "react";

const Table = (props) => {
  const { tableData, headerData } = props;

  const tableHeader = () => {
    return headerData.map((data, idx) => {
      return <td key={idx}>{data}</td>;
    });
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
          <td>{train.LineCode}</td>
          <td>{train.SecondsAtLocation}</td>
          <td>{train.ServiceType}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <table>
        <thead>
          <tr>{tableHeader()}</tr>
        </thead>
        <tbody>{returnTableData()}</tbody>
      </table>
    </>
  );
};

export default Table;
