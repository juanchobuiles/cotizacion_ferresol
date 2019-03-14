import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
const GridClients = (props) => {
    return (
        <BootstrapTable
            className='clients-table'
            data={props.clientes}
            options={{ noDataText: 'Aún no hay datos para la consulta' }}

        >
            <TableHeaderColumn dataField='NIT' isKey={true}>Nit</TableHeaderColumn>
            <TableHeaderColumn dataField='NOMBRE'>Nombre</TableHeaderColumn>
            <TableHeaderColumn dataField='DIRECCION'>Dirección</TableHeaderColumn>
            <TableHeaderColumn dataField='CIUDAD'>Ciudad</TableHeaderColumn>
            <TableHeaderColumn dataField='TELEFONO'>Teléfono</TableHeaderColumn>
        </BootstrapTable>
    )
}

export default GridClients