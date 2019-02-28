import React, { Component } from 'react'
import { Breadcrumb } from 'react-bootstrap';
import RoutesReturn from '../components/routes-return';
// import RoutesReturn from '../components/routes-return';

class Routes extends Component {
    render(props) {
        
        return (
            <Breadcrumb>
                 <RoutesReturn name = {this.props.name} ></RoutesReturn>  
            </Breadcrumb>
        )
    }
}

export default Routes