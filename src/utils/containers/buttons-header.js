import React, {Component} from 'react'
import { ButtonToolbar } from 'react-bootstrap';
import TagsButton from '../components/tags-buttons';
import '../components/tags-buttons.css';
class ButtonsHeader extends Component{
    render(){
        console.log(this.props.buttonsHeader)
        return(
            <ButtonToolbar className="buttons" >
                <TagsButton buttonsHeader = {this.props.buttonsHeader} /> 
            </ButtonToolbar>
        )
    }
}
export default ButtonsHeader