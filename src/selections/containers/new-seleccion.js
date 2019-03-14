import React, { Component } from 'react'
import Routes from '../../utils/containers/routes';
import { Card, Button, Collapse, InputGroup, FormControl } from 'react-bootstrap';
import Select from 'react-select';
class NewSelection extends Component {
    state = {
        open: false,
        routes: [{ name: "Selecciones", active: false, route: "/selections" }, { name: "Nuevo", active: true }],
    }
    render() {
        const { open } = this.state
        return (
            <div>

                <Routes name={this.state.routes} />
                <Card>
                    <Card.Header>
                        <h5 className="mb-0">
                            <Button
                                aria-expanded={open}
                                aria-controls="collapseOne"
                                onClick={() => this.setState({ open: !open })}
                                variant="link"
                            >
                                Contenido Principal
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
                            <InputGroup  className="mb-3 cotizacion-inputGroup">
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