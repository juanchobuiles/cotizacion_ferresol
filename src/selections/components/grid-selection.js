import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const GridSelection = (props) => {
      const options = {
        expandRowBgColor: 'rgb(242, 255, 163, 0.33)',
        noDataText: 'Aún no hay datos para la consulta'
  
      };
    
     
    return (
        <BootstrapTable
            className='selection-table'
            data={props.data}
            options={options}
            expandableRow={props.expandableRow}
            expandComponent={props.expandComponent}
            expandColumnOptions={props.expandColumnOptions }
            
        >
            <TableHeaderColumn dataField='id' isKey={true}>Id</TableHeaderColumn>
            <TableHeaderColumn dataField='name_product'>Producto terminado</TableHeaderColumn>
            <TableHeaderColumn dataFormat={props.buttonFormatter} ></TableHeaderColumn>
        </BootstrapTable>
    )
}

export default GridSelection