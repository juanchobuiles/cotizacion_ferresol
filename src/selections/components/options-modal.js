import React from "react";
import { Modal, Button, Card, CardGroup, Form, Row, Col } from "react-bootstrap";
import SelectCombobox from "../../cotizacion/components/select-combox";
import "./modal.css";
import Selecciones from "./selecciones";
import Select from "react-select";
const options = [{ value: '+', label: "Suma" }, { value: '-', label: "Resta" }];
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
                })

                }
                {
                  props.optionGroup &&
                  <div>
                    <Form.Group as={Row} controlId="formOperacion">
                      <Form.Label column sm={2}>
                        Operación
                      </Form.Label>
                      <Col sm={10}>
                        <Select options={options} />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPromedio">
                      <Form.Label column sm={2}>
                        Promedio
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="text"
                          placeholder='Consumo promedio tela'
                          name="promedio"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formManoObra">
                      <Form.Label column sm={2}>
                        M. Obra
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="text"
                          placeholder='Mano de obra'
                          name="mObra"
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
                          onChange={props.selectMultiIsumos}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPromedioInsumo">
                      <Form.Label column sm={2}>
                        Promedio Insumo
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type="text"
                          placeholder='Consumo promedio del insumo'
                          name="promedioInsumo"
                        />
                      </Col>
                    </Form.Group>
                  </div>
                }
              </Form>
            </Card.Body>
          </Card>
        </CardGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={props.saveSelecciones}>
          Guardar
        </Button>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default OptionsModal;
