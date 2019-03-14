import React, {Component} from 'react'
import Routes from '../../utils/containers/routes'
class Products extends Component {
    state = {
        data : [],
        routes: [{name:"Items" , active:true}],
    }
    render(){
        return(
            <div>
                <Routes  name={this.state.routes} />
               
            </div>
        )
    }
}

export default Products