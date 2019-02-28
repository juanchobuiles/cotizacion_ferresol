import React, { Component } from 'react'

import TagsButton from '../../utils/components/tags-buttons';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Routes from '../../utils/containers/routes';
class Cotizacion extends Component {
    state = {
        productAdd: [],
        routes: [{name:"Cotización" , active:true}]
    }
    render() {
        console.log(this.state.routes)
        return (
            <div>
                <Routes name={this.state.routes} />
                <TagsButton />
                <BootstrapTable
                    className='cotizacion-table'
                    ref='table'
                    data={this.state.productAdd}
                    options={{ noDataText: 'Aún no hay datos para la consulta' }}

                >
                    <TableHeaderColumn dataField='id' isKey={true}>No</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Cliente</TableHeaderColumn>
                    <TableHeaderColumn dataField='cant'>Fecha</TableHeaderColumn>
                    <TableHeaderColumn dataField='priceUni'>Vendedor</TableHeaderColumn>
                    <TableHeaderColumn dataField='total'>Estado</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

export default Cotizacion