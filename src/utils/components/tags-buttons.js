import React from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Octicon, { Plus, Note, CloudDownload } from '@githubprimer/octicons-react'

const TagsButton = (props) => {
        console.log(props.buttonsHeader);
        
        let item = []
        props.buttonsHeader.forEach((element, index) => {
              
                switch (element.name) {
                        case "new":
                                item.push(
                                        <LinkContainer to={element.route}>
                                                <Button variant="outline-secondary" key={index}>
                                                        <Octicon icon={Plus} /> Nuevo
                                                </Button>
                                        </LinkContainer>
                                )
                                break;
                        case "print":
                                item.push(
                                        <Button variant="outline-secondary" key={index}>
                                                <Octicon icon={Note} /> Iprimir
                                        </Button>
                                )
                                break;
                        case "export":
                                item.push(
                                        <Button variant="outline-secondary" key={index}>
                                                <Octicon icon={CloudDownload} /> Exportar
                                        </Button> 
                                )
                                break;
                        default:
                                break;
                }

        });

        return(
                item
        )

}
export default TagsButton