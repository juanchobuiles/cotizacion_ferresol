import React , {Component} from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Header from '../menu/header'
import Cotizacion from '../cotizacion/containers/cotizacion';
import NewCotizacion from '../cotizacion/containers/new-cotizacion';
import App from '../App';
import Clients from '../clients/containers/clients';
import Menu from '../menu/menu';
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './layout.css'
import Products from '../items/containers/products';
import Selecciones from '../selections/containers/selecciones';
import NewSelection from '../selections/containers/new-seleccion';
class Layout extends Component{
    render(){

        return(
            <Router>
                <div className="layout">
                    <Menu></Menu>
                    <div className="layout-content">
                        <Header />
                        <Container>
                            <Route exact path="/" component={App} />
                            <Route path="/cotizacion" component={Cotizacion} />
                            <Route path="/newcotizacion" component={NewCotizacion} />
                            <Route path="/clients" component={Clients} />
                            <Route path="/items" component={Products} />
                            <Route path="/selections" component={Selecciones} />
                            <Route path="/newselection" component={NewSelection} />
                        </Container>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Layout