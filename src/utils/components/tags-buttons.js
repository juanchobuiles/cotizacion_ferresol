import React  from 'react'
import {  Button , ButtonToolbar } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import Octicon,{Plus,Note,CloudDownload} from '@githubprimer/octicons-react'
const TagsButton = (props) => (
        <ButtonToolbar>
                <LinkContainer to="/newcotizacion">
                        <Button variant="outline-secondary" href="#">
                                <Octicon icon={Plus} /> Nuevo
                        </Button>
                </LinkContainer>
                <Button variant="outline-secondary" href="#">
                        <Octicon icon={Note} /> Iprimir</Button>
                <Button variant="outline-secondary" href="#">
                        <Octicon icon={CloudDownload} /> Exportar
                </Button>
        </ButtonToolbar>
       
)   
export default TagsButton