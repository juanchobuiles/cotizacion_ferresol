import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
const GridNewMainProduct = props => {
  return (
    <BootstrapTable data={props.tela}>
      <TableHeaderColumn dataField="id" isKey={true}>
        ID
      </TableHeaderColumn>
      <TableHeaderColumn dataField="name_selection">Tela</TableHeaderColumn>
      <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
    </BootstrapTable>
  );
};

export default GridNewMainProduct;
