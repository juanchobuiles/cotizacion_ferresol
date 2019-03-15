import React, { Component } from 'react'
import Routes from '../../utils/containers/routes';
import { Card, Button, Collapse, InputGroup, FormControl } from 'react-bootstrap';
import GridNewMainProduct from '../components/grid-new-mainproduct'
import Select from 'react-select';
import CustomInsertModal from '../components/custom-insert-modal';

class NewSelection extends Component {

    state = {
        open1: false,
        open: false,
        show: false,
        items: [],
        selectOptions: [],
        routes: [{ name: "Selecciones", active: false, route: "/selections" }, { name: "Nuevo", active: true }],
    }
    selectMulti = (e) => {
        this.setState({selectOptions:e})
        
    }
    saveInfo = (e) => {
        console.log('Guardando Información', document.getElementById("nombreInput"),this.state.selectOptions)
    }

    handleShow = () => {

        this.setState({ show: true });
    };

    handleHide = () => {
        this.setState({ show: false });
    };

    componentWillMount() {
        fetch("http://localhost:8080/items")
            .then(response => response.json())
            .then(items => this.setState({ items })
            )
    }

    render() {
        const { open1, open } = this.state
        console.log(this.state.items);

        return (
            <div>

                <Routes name={this.state.routes} />
                <Card >
                    <Card.Header>
                        <h5 className="mb-0">
                            <Button
                                aria-expanded={open1}
                                aria-controls="collapseOne"
                                onClick={() => this.setState({ open1: !open1 })}
                                variant="link"
                            >
                                1) Contenido Principal
                                </Button>
                        </h5>
                    </Card.Header>
                    <Collapse in={this.state.open1}>
                        <Card.Body id="collapseOne">
                            <InputGroup size="sm" className="mb-3 cotizacion-inputGroup">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Producto terminado</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl className="inputCantidad" aria-label="Small" aria-describedby="inputGroup-sizing-sm" disabled={this.state.optionVisible} />
                            </InputGroup>
                            <Button variant="secondary" size="sm" onClick={this.handleShow}>
                                Nueva Tela
                            </Button>
                            <GridNewMainProduct createCustomModal={this.createCustomModal} />
                            <CustomInsertModal
                                show={this.state.show}
                                onHide={this.handleHide}
                                items={this.state.items}
                                saveInfo={this.saveInfo} 
                                selectMulti={this.selectMulti}/>
                        </Card.Body>
                    </Collapse>
                </Card>

                <Card >
                    <Card.Header>
                        <h5 className="mb-0">
                            <Button
                                aria-expanded={open}
                                aria-controls="collapseOne"
                                onClick={() => this.setState({ open: !open })}
                                variant="link"
                            >
                                1) Contenido Principal
                                </Button>
                        </h5>
                    </Card.Header>
                    <Collapse in={this.state.open}>
                        <Card.Body id="collapseOne">
                            <InputGroup size="sm" className="mb-3 cotizacion-inputGroup">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Producto terminado</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl className="inputCantidad" aria-label="Small" aria-describedby="inputGroup-sizing-sm" disabled={this.state.optionVisible} />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-3 cotizacion-inputGroup">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Tela</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl className="inputCantidad" aria-label="Small" aria-describedby="inputGroup-sizing-sm" disabled={this.state.optionVisible} />
                            </InputGroup>
                            <Select

                                placeholder="Seleccione...."
                                options={[{ label: "Insumo 1", value: "1" }, { label: "Insumo 2", value: "2" }]

                                }


                            />
                            <InputGroup className="mb-3 cotizacion-inputGroup">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Insumos</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Select

                                    placeholder="Seleccione...."
                                    options={[{ label: "Insumo 1", value: "1" }, { label: "Insumo 2", value: "2" }]

                                    }


                                />
                            </InputGroup>
                        </Card.Body>
                    </Collapse>
                </Card>
            </div>

        )
    }
}
export default NewSelection