import React, { Component } from 'react'
import Routes from '../../utils/containers/routes';
import { products } from '../../data/data.json'
import Select from 'react-select';
import { Card, Button, CardGroup, InputGroup, FormControl, ButtonToolbar } from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import SelectCombobox from '../components/select-combox';
import '../components/new-cotizacion.css'
class NewCotizacion extends Component {

    state = {
        products,
        routes: [{name:"Cotización" , active:false , route: "/cotizacion"},{name:"Nuevo" , active:true}],
        visible: false,
        optionVisible: false,
        visibleOption: false,
        visibleSubOption: false,
        visibleSubOption1: false,
        visibleSubOption2: false,
        visibleSubOption3: false,
        isClearable: false,
        visibleButton: false,
        buttonFooter: false,
        main_produc: [],
        main_insumo: [],
        productAdd: [],
        SubOption: [],
        SubOption1: [],
        SubOption2: [],
        SubOption3: [],
        SubOption4: []
    }


    selectTipoProduc = (e) => {
        let Consult = this.state.products.find(element => element.id === e.value)
        this.setState({
            visible: true,
            main_produc: Consult
        })
    }

    selectMainInsumo = (e) => {
        let insumo = this.state.main_produc["main_produc"].find(i => i.id_selection === e.value)
        this.setState({
            main_insumo: { main_produc: insumo.name_selection, insumo: insumo["insumo"] }
        })
    }

    agregaProducto = () => {
        let cant = parseInt(document.querySelector('.inputCantidad').value)
        let priceUni, total
        if (this.state.productAdd.length === 0) {
            priceUni = (this.state.main_insumo.insumo.mano_obra + (this.state.main_insumo.insumo.mano_obra * 0.07))
            total = priceUni * cant
            this.setState({
                productAdd: [
                    {
                        id: 1,
                        name: `${this.state.main_produc.name_product} ${this.state.main_insumo.main_produc}`,
                        cant,
                        priceUni,
                        total
                    }
                ],
                optionVisible: true,
                visibleOption: true
            })

        } else {
            console.log(this.state.main_insumo.insumo, cant)
            priceUni = (this.state.main_insumo.insumo.mano_obra + (this.state.main_insumo.insumo.mano_obra * 0.07))
            total = priceUni * cant
            let name = `${this.state.main_produc.name_product} ${this.state.main_insumo.main_produc}`
            this.state.productAdd.push({ id: this.state.productAdd.length + 1, name, cant, priceUni, total })
            this.setState({
                productAdd: this.state.productAdd,
                optionVisible: true,
                visibleOption: true
            })


        }

    }

    selectOption = (e) => {
        let SubOption = this.state.main_produc["options"].find(i => i.id_option === e.value)
        this.setState({
            visibleSubOption1: false,
            visibleSubOption2: false,
            visibleSubOption3: false,
            visibleButton: false,
            visibleSubOption: true,
            SubOption
        })
    }

    selectSubOption = (e) => {
        let SubOption = this.state.SubOption["selection_option"].find(i => i.selection_name === e.value)

        if (SubOption.sublevel_selection) {
            this.setState({
                SubOption1: SubOption,
                visibleSubOption1: true
            })
        } else {
            this.setState({
                SubOption1: SubOption,
                visibleButton: true
            })
        }

    }
    selectSubOption1 = (e) => {
        let SubOption1 = this.state.SubOption1["sublevel"].find(i => i.selection_name === e.value)
        if (SubOption1.sublevel_selection) {
            this.setState({
                SubOption2: SubOption1,
                visibleSubOption2: true
            })
        } else {
            this.setState({
                SubOption2: SubOption1,
                visibleButton: true
            })
        }

    }
    selectSubOption2 = (e) => {
        let SubOption2 = this.state.SubOption2["sublevel"].find(i => i.selection_name === e.value)
        if (SubOption2.sublevel_selection) {
            this.setState({
                SubOption3: SubOption2,
                visibleSubOption3: true
            })
        } else {
            this.setState({
                SubOption3: SubOption2,
                visibleButton: true
            })
        }

    }
    selectSubOption3 = (e) => {
        let SubOption3 = this.state.SubOption3["sublevel"].find(i => i.selection_name === e.value)
        this.setState({
            SubOption4: SubOption3,
            visibleButton: true
        })



    }

    agregaOpcion = () => {
        let args;
        if (this.state.SubOption4.length !== 0) {
            console.log('4')
            args = {
                name: `${this.state.SubOption.name_option} ${this.state.SubOption1.selection_name} ${this.state.SubOption2.selection_name} ${this.state.SubOption3.selection_name} ${this.state.SubOption4.selection_name}`,
                operation: this.state.SubOption4.operation,
                promedio: this.state.SubOption4.promedio_principal,
                mano_obra: this.state.SubOption4.mano_obra
            }
        } else if (this.state.SubOption3.length !== 0) {
            console.log('3')
            args = {
                name: `${this.state.SubOption.name_option} ${this.state.SubOption1.selection_name} ${this.state.SubOption2.selection_name} ${this.state.SubOption3.selection_name}`,
                operation: this.state.SubOption3.operation,
                promedio: this.state.SubOption3.promedio_principal,
                mano_obra: this.state.SubOption3.mano_obra
            }
        } else if (this.state.SubOption2.length !== 0) {

            args = {
                name: `${this.state.SubOption.name_option} ${this.state.SubOption1.selection_name} ${this.state.SubOption2.selection_name}`,
                operation: this.state.SubOption2.operation,
                promedio: this.state.SubOption2.promedio_principal,
                mano_obra: this.state.SubOption2.mano_obra
            }
            console.log(args)
        } else if (this.state.SubOption1.length !== 0) {
            console.log('1')
            args = {
                name: `${this.state.SubOption.name_option} ${this.state.SubOption1.selection_name}`,
                operation: this.state.SubOption1.operation,
                promedio: this.state.SubOption1.promedio_principal,
                mano_obra: this.state.SubOption1.mano_obra
            }

        }
        this.refs.table.reset()
        this.saveOptions(args)
    }

    saveOptions = (args) => {
        let { name, operation, promedio, mano_obra } = args
        let rowGrid = this.state.productAdd.pop()
        console.log(rowGrid, mano_obra, this.state.productAdd)
        rowGrid.name = `${rowGrid.name} ${name}`
        if (operation === '+') {
            rowGrid.priceUni += mano_obra
            rowGrid.total = rowGrid.priceUni * rowGrid.cant
        } else {
            rowGrid.priceUni -= mano_obra
            rowGrid.total = rowGrid.priceUni * rowGrid.cant
        }

        this.state.productAdd.push(rowGrid)

        this.setState({
            productAdd: this.state.productAdd,
            SubOption: [],
            SubOption1: [],
            SubOption2: [],
            SubOption3: [],
            SubOption4: [],
            visibleSubOption: false,
            visibleSubOption1: false,
            visibleSubOption2: false,
            visibleSubOption3: false,
            buttonFooter: true,
            visibleButton: false
        })




    }
    newRegistro = () => {
        this.setState({
            visible: false,
            optionVisible: false,
            visibleOption: false,
            visibleSubOption: false,
            visibleSubOption1: false,
            visibleSubOption2: false,
            visibleSubOption3: false,
            isClearable: false,
            visibleButton: false,
            main_produc: [],
            main_insumo: [],
            SubOption: [],
            SubOption1: [],
            SubOption2: [],
            SubOption3: [],
            SubOption4: []
        })
    }



    render() {

        const SelectProduc = this.state.products.map((product, i) => {
            let arraySelection = {}
            arraySelection["label"] = product.name_product
            arraySelection["value"] = product.id
            // console.log(arraySelection)
            return (
                arraySelection
            )
        })

        return (
            <div>
                <Routes name={this.state.routes} />

                <CardGroup>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>Tipo de Producto</Card.Header>
                        <Card.Body>
                            <Select
                                isDisabled={this.state.optionVisible}
                                isSearchable
                                placeholder="Seleccione...."
                                onChange={this.selectTipoProduc}
                                options={SelectProduc} />
                        </Card.Body>
                    </Card>
                    {
                        this.state.visible &&
                        <Card style={{ width: '18rem' }}>
                            <Card.Header>Tela</Card.Header>
                            <Card.Body>
                                <Card.Link >
                                    {
                                        <Select
                                            isDisabled={this.state.optionVisible}
                                            className="mainProduct"
                                            classNamePrefix="mainProduct1"
                                            placeholder="Seleccione...."
                                            options={
                                                this.state.main_produc["main_produc"].map((props) => {
                                                    return {
                                                        value: props.id_selection,
                                                        label: props.name_selection
                                                    }
                                                })
                                            }
                                            onChange={this.selectMainInsumo}

                                        />
                                    }
                                </Card.Link>
                                <InputGroup size="sm" className="mb-3 cotizacion-inputGroup">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-sm">Cantidad</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl className="inputCantidad" aria-label="Small" aria-describedby="inputGroup-sizing-sm" disabled={this.state.optionVisible} />
                                    <InputGroup.Prepend>
                                        <Button variant="primary" onClick={this.agregaProducto} disabled={this.state.optionVisible} >Agregar</Button>
                                    </InputGroup.Prepend>
                                </InputGroup>

                            </Card.Body>
                        </Card>
                    }
                    {
                        this.state.visibleOption &&
                        <Card >
                            <Card.Header>Opciones</Card.Header>
                            <Card.Body>

                                {
                                    <Select

                                        placeholder="Seleccione...."
                                        options={
                                            this.state.main_produc["options"].map(element => {
                                                return { label: element.name_option, value: element.id_option }
                                            })
                                        }
                                        onChange={this.selectOption}

                                    />
                                }
                                {
                                    this.state.visibleSubOption &&
                                    <SelectCombobox
                                        
                                        option={
                                            this.state.SubOption["selection_option"].map(element => {
                                                return { label: element.selection_name, value: element.selection_name }
                                            })
                                        }
                                        onChange={this.selectSubOption}
                                        isClearable={this.state.isClearable} />
                                }
                                {
                                    this.state.visibleSubOption1 &&
                                    <SelectCombobox
                                        className="cotizacion-select-options"
                                        option={
                                            this.state.SubOption1["sublevel"].map(element => {
                                                return { label: element.selection_name, value: element.selection_name }
                                            })
                                        }
                                        onChange={this.selectSubOption1}
                                    />
                                }
                                {
                                    this.state.visibleSubOption2 &&
                                    <SelectCombobox
                                        className="cotizacion-select-options"
                                        option={

                                            this.state.SubOption2["sublevel"].map(element => {
                                                return { label: element.selection_name, value: element.selection_name }
                                            })
                                        }
                                        onChange={this.selectSubOption2}
                                    />
                                }
                                {
                                    this.state.visibleSubOption3 &&
                                    <SelectCombobox
                                        className="cotizacion-select-options"
                                        option={
                                            this.state.SubOption3["sublevel"].map(element => {
                                                return { label: element.selection_name, value: element.selection_name }
                                            })
                                        }
                                        onChange={this.selectSubOption3}
                                        isClearable={this.isClearable}
                                    />
                                }
                                {
                                    this.state.visibleButton &&
                                    <Button
                                        className="cotizacion-button"
                                        variant="success"
                                        size="sm"
                                        onClick={this.agregaOpcion}
                                    >Guardar</Button>
                                }

                            </Card.Body>
                        </Card>
                    }
                </CardGroup>

                <BootstrapTable
                    className='cotizacion-table'
                    ref='table'
                    data={this.state.productAdd}
                    options={{ noDataText: 'Aún no hay datos para la consulta' }}

                >
                    <TableHeaderColumn dataField='id' isKey={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Nombre Producto</TableHeaderColumn>
                    <TableHeaderColumn dataField='cant'>Cantidad</TableHeaderColumn>
                    <TableHeaderColumn dataField='priceUni'>Precio Uni</TableHeaderColumn>
                    <TableHeaderColumn dataField='total'>Total</TableHeaderColumn>
                </BootstrapTable>
                {
                    this.state.buttonFooter &&
                    <ButtonToolbar className="cotizacion-button-finalizar" >
                        <Button variant="outline-success" size="lg" onClick={this.newRegistro} >Addicionar</Button>
                        <Button variant="outline-warning" size="lg" >Finalizar</Button>
                    </ButtonToolbar>
                }
            </div>
        )
    }
}

export default NewCotizacion