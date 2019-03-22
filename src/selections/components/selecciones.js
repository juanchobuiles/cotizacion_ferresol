import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Select from "react-select";

const Selecciones = props => {
  const options = [{ value: true, label: "Si" }, { value: false, label: "No" }];
  return (
    <Form.Group as={Row} controlId="formNombreOption">
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

      <Form.Label column sm={2}>
        SubNivel
      </Form.Label>

      <Col sm={10}>
        <Select onChange={props.handleChangeSubnivel} options={options} />
      </Col>
    </Form.Group>
  );
};

export default Selecciones;
