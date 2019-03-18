import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
const GridNewMainProductExpand = (props) => {
    const options = {
        noDataText: 'Aún no hay datos para la consulta'
  
      };
    if (props.data) {
        return (
            <BootstrapTable data={props.data}
            options={options}
            >

                <TableHeaderColumn dataField='id_insumo' 
                isKey={true} 
                hidden={true}
                >Id</TableHeaderColumn>
                <TableHeaderColumn dataField='name_insumo'>Insumo</TableHeaderColumn>
                <TableHeaderColumn dataField='promedio'>Promedio</TableHeaderColumn>
                <TableHeaderColumn dataField='mano_obra'>M. Obra</TableHeaderColumn>    
            </BootstrapTable>);
    } else {
        return (<p>?</p>);
    }

}
export default GridNewMainProductExpand