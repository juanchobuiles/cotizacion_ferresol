import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
const GridNewSeleccion = props => {
  console.log(props.selection_option);

  const options = {
    expandRowBgColor: "rgb(242, 255, 163, 0.33)",
    noDataText: "Aún no hay datos para la consulta"
  };
  return (
    <BootstrapTable data={props.selection_option} options={options}>
      <TableHeaderColumn dataField="id" isKey={true}>
        ID
      </TableHeaderColumn>
      <TableHeaderColumn dataField="selection_name">
        Seleccion
      </TableHeaderColumn>
      <TableHeaderColumn dataFormat={props.buttonFormatter} />
    </BootstrapTable>
  );
};

export default GridNewSeleccion;
