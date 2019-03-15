import React from 'react'
import { BootstrapTable,TableHeaderColumn } from 'react-bootstrap-table'
const GridNewMainProduct = (props) => {
 
    return (
        <BootstrapTable data={props.data} >
            <TableHeaderColumn dataField='id' isKey={true}>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='tela'>Tela</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
    )
}

export default GridNewMainProduct