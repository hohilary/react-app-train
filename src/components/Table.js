import { useState } from "react";
// import tableData1 from "../tableData1.json";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const TableTest = () => {
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

 const [tableData, setTableData] = useState(temp_json);


 const columns = [
  { label: "Full Name", accessor: "TrainId" },
  { label: "Email", accessor: "TrainNumber" },
  { label: "Gender", accessor: "CarCount" },
  { label: "Age", accessor: "DirectionNum" },
  { label: "Start date", accessor: "CircuitId" },
 ];

 return (
  <>
   <table className="table">
    <caption>
     Developers currently enrolled in this course, column headers are sortable.
    </caption>
    <TableHead columns={columns} />
    <TableBody columns={columns} tableData={tableData} />
   </table>
  </>
 );
};

export default TableTest;