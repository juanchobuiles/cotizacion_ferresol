import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../images/logo.png'
import './menu.css'
const Menu = () => (
    
    <Navbar bsPrefix="nav-menu" className="toggle-content.is-visible" bg="dark" variant="dark">
        <Navbar.Brand>
            <Link to="/"><img src={logo} width={250}></img></Link>
        </Navbar.Brand>
        <hr className="bg-secondary"></hr>
        <Nav md={12} className="flex-column">
            <LinkContainer to="/">
                <Nav.Link>
                    <i className="material-icons">home</i> Inicio
                </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cotizacion">
                <Nav.Link>
                    <i className="material-icons">assignment</i> Cotización
                </Nav.Link>
            </LinkContainer>
            <NavDropdown
                title={
                    <div style={{ display: 'inline-block' }}>
                        <i className="material-icons">settings</i> Configuración
                    </div>
                }
            >
                <LinkContainer to="/selections">
                    <NavDropdown.Item>
                    <i className="material-icons">description   </i> Selecciones
                    </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/clients">
                    <NavDropdown.Item>
                    <i className="material-icons">person</i> Clientes
                    </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/items">
                    <NavDropdown.Item>
                    <i className="material-icons">view_module</i> Items
                    </NavDropdown.Item>
                </LinkContainer>
                

            </NavDropdown>
        
        </Nav>
    </Navbar>
)
export default Menu