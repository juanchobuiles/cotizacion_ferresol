import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Select from "react-select";

const Selecciones = props => {
  const options = [{ value: true, label: "Si" }, { value: false, label: "No" }];
  return (
    <div>
      <Form.Group as={Row} controlId="formNombreSeleccion">
        <Form.Label column sm={2}>
          {props.label}
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder={props.placeholder}
            name={props.name}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formSublevel">
        <Form.Label column sm={2}>
          SubNivel
        </Form.Label>

        <Col sm={10}>
          <Select onChange={props.handleChangeSubnivel} options={options} />
        </Col>
      </Form.Group>
    </div>
  );
};

export default Selecciones;
