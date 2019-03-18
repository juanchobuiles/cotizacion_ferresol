import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import SelectCombobox from "../../cotizacion/components/select-combox";
import "./modal.css";
const CustomInsertModal = props => {
  return (
    <Modal
      size="lg"
      show={props.show}
      onHide={props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="title-modal">
        <Modal.Title id="example-custom-modal-styling-title">
          Nueva Tela
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="formNombre">
            <Form.Label column sm={2}>
              Nombre
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Nombre de la tela"
                name="nombreInput"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formInsumos">
            <Form.Label column sm={2}>
              Insumos
            </Form.Label>
            <Col sm={10}>
              <SelectCombobox
                className="cotizacion-select-options"
                option={props.items.map(element => {
                  return {
                    label: element.DESCRIPCION,
                    value: element.REFERENCIA
                  };
                })}
                onChange={props.selectMulti}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPromedio">
            <Form.Label column sm={2}>
              Promedio
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Consumo promedio" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formMObra">
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
        <Button variant="success" onClick={props.saveInfo}>
          Guardar
        </Button>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CustomInsertModal;
