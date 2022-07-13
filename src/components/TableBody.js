const TableBody = ({ tableData, columns }) => {

    console.log('tableData')

    console.log(tableData)
    return (
     <tbody>
        
      {tableData && tableData.map((data) => {
        console.log('omg')
        console.log(data)
       return (
        <tr key={data.id}>
         {columns.map(({ accessor }) => {
          const tData = data[accessor] ? data[accessor] : "——";
          return <td key={accessor}>{tData}</td>;
         })}
        </tr>
       );
      })}
     </tbody>
    );
   };

   export default TableBody;