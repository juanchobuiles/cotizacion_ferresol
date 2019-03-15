import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
const GridItems = (props) => {
    return (
        <BootstrapTable
            className='items-table'
            data={props.items}
            options={{ noDataText: 'Aún no hay datos para la consulta' }}

        >
            <TableHeaderColumn dataField='ELEMENTO' isKey={true}>Id</TableHeaderColumn>
            <TableHeaderColumn dataField='REFERENCIA'>Referencia</TableHeaderColumn>
            <TableHeaderColumn dataField='DESCRIPCION'>Nombre</TableHeaderColumn>
            <TableHeaderColumn dataField='ULT.VALOR COMPRA'>Ult.Valor Compra</TableHeaderColumn>
            
        </BootstrapTable>
    )
}

export default GridItems