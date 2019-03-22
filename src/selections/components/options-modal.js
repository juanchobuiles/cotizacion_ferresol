import React from "react";
import { Modal, Button, Card, CardGroup, Form } from "react-bootstrap";
// import SelectCombobox from "../../cotizacion/components/select-combox";
import "./modal.css";
import Selecciones from "./selecciones";

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
          Selecciones
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CardGroup>
          <Card>
            <Card.Body>
              <Form>
                {props.seleccionArry.map((a, index) => {
                  return (
                    <Selecciones
                      label={a.label}
                      placeholder={a.placeholder}
                      name={a.name}
                      handleChangeSubnivel={props.handleChangeSubnivel}
                    />
                  );
                })}
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
