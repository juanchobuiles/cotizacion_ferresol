import React from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import SelectCombobox from '../../cotizacion/components/select-combox'
const CustomInsertModal = (props) => {

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Nueva Tela
                </Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalNombre">
                        <Form.Label column sm={2}>
                            Nombre
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Nombre de la tela"  name="nombreInput" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalInsumos">
                        <Form.Label column sm={2}>
                            Insumos
                        </Form.Label>
                        <Col sm={10}>
                            <SelectCombobox
                                className="cotizacion-select-options"
                                option={
                                    props.items.map(element => {
                                        return { label: element.DESCRIPCION, value: element.REFERENCIA }
                                    })
                                }
                                onChange={props.selectMulti}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPromedio">
                        <Form.Label column sm={2}>
                            Promedio
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control  type="text" placeholder="Consumo promedio" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalMObra">
                        <Form.Label column sm={2}>
                            M.Obra
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Mano de obra" />
                        </Col>
                    </Form.Group>
                </Form>


            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={props.saveInfo}>Guardar</Button>
                <Button onClick={props.onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default CustomInsertModal