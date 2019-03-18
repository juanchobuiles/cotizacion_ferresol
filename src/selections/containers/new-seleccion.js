import React, { Component } from "react";
import Routes from "../../utils/containers/routes";
import {
  Card,
  Button,
  Collapse,
  InputGroup,
  FormControl,
  Form,
  Row,
  Col
} from "react-bootstrap";
import GridNewMainProduct from "../components/grid-new-mainproduct";
import CustomInsertModal from "../components/custom-insert-modal";
import GridNewMainProductExpand from "../components/grid-new-mainproduc-expand";
import OptionsModal from "../components/options-modal";

class NewSelection extends Component {
  state = {
    open1: false,
    open: false,
    show: false,
    showOptions: false,
    items: [],
    selectOptions: [],
    tela: [],
    routes: [
      { name: "Selecciones", active: false, route: "/selections" },
      { name: "Nuevo", active: true }
    ]
  };

  isExpandableRow() {
    return true;
  }

  expandComponent(row) {
    return <GridNewMainProductExpand data={row.insumo} />;
  }

  expandColumnComponent({ isExpandableRow, isExpanded }) {
    let content = "";

    if (isExpandableRow) {
      content = isExpanded ? (
        <i className="material-icons">remove_circle_outline</i>
      ) : (
        <i className="material-icons">add_circle_outline</i>
      );
    } else {
      content = " ";
    }
    return <div> {content} </div>;
  }

  selectMulti = e => {
    this.setState({ selectOptions: e });
  };

  saveInfo = e => {
    const $name_selection = document.getElementById("formNombre").value;
    const $promedio = parseFloat(document.getElementById("formPromedio").value);
    const $mano_obra = parseFloat(document.getElementById("formMObra").value);
    this.state.tela.push({
      id: this.consultId(),
      name_selection: $name_selection,
      insumo: this.state.selectOptions.map(element => {
        let elements = {};
        elements["promedio"] = $promedio;
        elements["mano_obra"] = $mano_obra;
        elements["id_insumo"] = element.value;
        elements["name_insumo"] = element.label;
        return elements;
      })
    });

    this.setState({
      tela: this.state.tela,
      show: false
    });
  };

  consultId = () => {
    if (this.state.tela.length === 0) {
      return 1;
    } else {
      return this.state.tela.length + 1;
    }
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleShowOptions = () => {
    this.setState({ showOptions: true });
  };

  handleHideOptions = () => {
    this.setState({ showOptions: false });
  };

  handleHide = () => {
    this.setState({ show: false });
  };

  componentWillMount() {
    fetch("http://localhost:8080/items")
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  render() {
    const { open1, open } = this.state;
    return (
      <div>
        <Routes name={this.state.routes} />
        <Card>
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
                  <InputGroup.Text id="inputGroup-sizing-sm">
                    Producto terminado
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="inputCantidad"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  disabled={this.state.optionVisible}
                />
              </InputGroup>
              <Button
                variant="secondary"
                size="sm"
                onClick={this.handleShow}
                className="newProducts-button"
              >
                Nueva Tela
              </Button>
              <GridNewMainProduct
                tela={this.state.tela}
                expandableRow={this.isExpandableRow}
                expandComponent={this.expandComponent}
                expandColumnOptions={{
                  expandColumnVisible: true,
                  expandColumnComponent: this.expandColumnComponent,
                  columnWidth: 50
                }}
              />
              <CustomInsertModal
                show={this.state.show}
                onHide={this.handleHide}
                items={this.state.items}
                saveInfo={this.saveInfo}
                selectMulti={this.selectMulti}
              />
            </Card.Body>
          </Collapse>
        </Card>

        <Card>
          <Card.Header>
            <h5 className="mb-0">
              <Button
                aria-expanded={open}
                aria-controls="collapseOne"
                onClick={() => this.setState({ open: !open })}
                variant="link"
              >
                2) Opciones
              </Button>
            </h5>
          </Card.Header>
          <Collapse in={this.state.open}>
            <Card.Body id="collapseOne">
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
                          placeholder="Nombre de la opción"
                          name="nombreInput"
                        />
                      </Col>
                    </Form.Group>
                  </Form>

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={this.handleShowOptions}
                    className="newProducts-button"
                  >
                    Agregar selección
                  </Button>
                  <GridNewMainProduct
                    tela={this.state.tela}
                    expandableRow={this.isExpandableRow}
                    expandComponent={this.expandComponent}
                    expandColumnOptions={{
                      expandColumnVisible: true,
                      expandColumnComponent: this.expandColumnComponent,
                      columnWidth: 50
                    }}
                  />
                  <OptionsModal
                    show={this.state.showOptions}
                    onHide={this.handleHideOptions}
                  />
                </Card.Body>
                <Card.Footer>
                  <Button variant="success">Guardar opción</Button>
                </Card.Footer>
              </Card>
            </Card.Body>
          </Collapse>
        </Card>
      </div>
    );
  }
}
export default NewSelection;
