import React from "react";
import {
  Modal,
  Button,
  Card,
  CardGroup,
  Form,
  Row,
  Col
} from "react-bootstrap";
// import SelectCombobox from "../../cotizacion/components/select-combox";
import "./modal.css";

const OptionsModal = props => {
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
          Nueva selección
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CardGroup>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group as={Row} controlId="formNombreOption">
                  <Form.Label column sm={2}>
                    Nombre
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="Nombre selección"
                      name="nombreInput"
                    />
                  </Col>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </CardGroup>
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
export default OptionsModal;
