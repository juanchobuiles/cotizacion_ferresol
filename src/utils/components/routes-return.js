import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const RoutesReturn = (props) => {
    let item = []
    props.name.forEach(element => {
        if (element.active) {
            return (item.push(<Breadcrumb.Item active={element.active}>{element.name}</Breadcrumb.Item>))
        } else {
            return (item.push(
                <LinkContainer to={element.route}>
                    <Breadcrumb.Item active={element.active}>{element.name}</Breadcrumb.Item>
                </LinkContainer>
            ))
        }
    })

    return (
        item
    )
}

export default RoutesReturn