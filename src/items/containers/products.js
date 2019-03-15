import React, {Component} from 'react'
import Routes from '../../utils/containers/routes'
import GridItems from '../components/grid-items';
class Products extends Component {
    state = {
        data : null,
        routes: [{name:"Items" , active:true}],
    }
    componentWillMount() {
        fetch("http://localhost:8080/items")
          .then(response => response.json())
          .then(data => this.setState({ data }));
      }
    render(){
        return(
            <div>
                <Routes  name={this.state.routes} />
                <GridItems items={this.state.data} />
            </div>
        )
    }
}

export default Products