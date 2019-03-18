import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
const GridNewMainProduct = props => {
  const options = {
    expandRowBgColor: 'rgb(242, 255, 163, 0.33)',
    noDataText: 'Aún no hay datos para la consulta'

  };
  return (
    <BootstrapTable
      data={props.tela}
      options={options}
      expandableRow={props.expandableRow}
      expandComponent={props.expandComponent}
      expandColumnOptions={props.expandColumnOptions}
    >
      <TableHeaderColumn dataField="id" isKey={true}>
        ID
      </TableHeaderColumn>
      <TableHeaderColumn dataField="name_selection">Tela</TableHeaderColumn>

    </BootstrapTable>
  );
};

export default GridNewMainProduct;
