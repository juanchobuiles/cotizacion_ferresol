import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
const GridClients = (props) => {
    return (
        <BootstrapTable
            className='clients-table'
            data={props.clientes}
            options={{ noDataText: 'Aún no hay datos para la consulta' }}

        >
            <TableHeaderColumn dataField='nit' isKey={true}>Nit</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Nombre</TableHeaderColumn>
            <TableHeaderColumn dataField='addres'>Dirección</TableHeaderColumn>
            <TableHeaderColumn dataField='city'>Ciudad</TableHeaderColumn>
            <TableHeaderColumn dataField='telephone'>Teléfono</TableHeaderColumn>
        </BootstrapTable>
    )
}

export default GridClients