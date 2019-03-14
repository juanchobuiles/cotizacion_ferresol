import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import uniqid from 'uniqid'
const RoutesReturn = (props) => {
    let item = []
    props.name.forEach((element,index) => {
        if (element.active) {
            return (item.push(<Breadcrumb.Item key={uniqid()} active={element.active}>{element.name}</Breadcrumb.Item>))
        } else {
            return (item.push(
                <LinkContainer to={element.route}>
                    <Breadcrumb.Item key={uniqid()} active={element.active}>{element.name}</Breadcrumb.Item>
                </LinkContainer>
            ))
        }
    })

    return (
        item
    )
}

export default RoutesReturn