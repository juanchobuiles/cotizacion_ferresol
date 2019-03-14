import React, { Component } from 'react'
import Routes from '../../utils/containers/routes'
import data from '../../data/data.json'
import GridSelection from '../components/grid-selection';
import GridSelectionExpand from '../components/grid-selection-expand'
import { Button, ButtonToolbar } from 'react-bootstrap';
import '../components/selections.css'
import ButtonsHeader from '../../utils/containers/buttons-header';
class Selecciones extends Component {
    state = {
        data,
        routes: [{ name: "Selecciones", active: true }],
        buttonsHeader:[{name:"new", route:"/newselection"}]
    }

    isExpandableRow() {
        return true;
    }

    expandComponent(row) {
        return (
            <GridSelectionExpand data={row.main_produc} />
        );
    }

    buttonFormatter(cell, row) {
       
        return (
            <ButtonToolbar className="selecciones-botones-grid">
                <Button variant="outline-secondary" size="sm" ><i className="material-icons">
                ballot</i></Button>
                <Button variant="outline-info" size="sm" ><i className="material-icons">
                create</i></Button>
                <Button variant="outline-danger" size="sm" ><i className="material-icons">
                clear</i></Button>
            </ButtonToolbar>
        )
    }

    expandColumnComponent({ isExpandableRow, isExpanded }) {
        let content = '';

        if (isExpandableRow) {
            content = (isExpanded ? <i className="material-icons">
                remove_circle_outline
            </i> : <i className="material-icons">
                    add_circle_outline
            </i>);
        } else {
            content = ' ';
        }
        return (
            <div> {content} </div>
        );
    }
    render() {

        return (
            <div>
                <Routes name={this.state.routes} />
                <ButtonsHeader buttonsHeader={this.state.buttonsHeader} />
                <GridSelection data={this.state.data.products}
                    expandableRow={this.isExpandableRow}
                    expandComponent={this.expandComponent}
                    expandColumnOptions={{
                        expandColumnVisible: true,
                        expandColumnComponent: this.expandColumnComponent,
                        columnWidth: 50
                    }

                    }
                    buttonFormatter={this.buttonFormatter}
                />

            </div>
        )
    }
}

export default Selecciones