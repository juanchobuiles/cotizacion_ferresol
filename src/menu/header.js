import React , {Component} from 'react'
import {Navbar,Button} from 'react-bootstrap'
class Header extends Component{
    state = {
        displayMenu : false
    }

    ocultaNav = ()=>{
        if (this.state.displayMenu) {
           document.querySelector('.nav-menu').style.display = 'block'
            this.setState({
                displayMenu:false
            })
        }else{
            document.querySelector('.nav-menu').style.display = 'none'
            this.setState({
                displayMenu:true
            })
        }

        
    }
    render(){
        return(
            <Navbar  bg="light">
                <Navbar.Brand as="a" onClick={this.ocultaNav}  ><i className="material-icons">menu</i></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                     Hola, <a href="#login">Admin   </a>
                     <Button variant="outline-danger">
                            <i className="material-icons">exit_to_app</i>
                        </Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Header