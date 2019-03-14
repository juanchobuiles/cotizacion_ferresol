import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
const GridSelectionExpand = (props) => {
    const options = {
        noDataText: 'Aún no hay datos para la consulta'
  
      };
    if (props.data) {
        return (
            <BootstrapTable data={props.data}
            options={options}
            >
                <TableHeaderColumn dataField='id_selection' isKey={true}>Id</TableHeaderColumn>
                <TableHeaderColumn dataField='name_selection'>Selección</TableHeaderColumn>  
            </BootstrapTable>);
    } else {
        return (<p>?</p>);
    }

}
export default GridSelectionExpand