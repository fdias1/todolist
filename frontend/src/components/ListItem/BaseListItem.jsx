import React from 'react';
import styled from 'styled-components'

const Item = styled.li`
    list-style-type:none;
`

const BaseListItem = (props) => {
    return (
        <Item className="p-3 border rounded mb-3" {...props}>
            <div className="row">
                <div className="col">
                    <strong>Nome: </strong>
                    {props.name}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <strong>E-mail: </strong>
                    {props.email}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <strong>Descrição: </strong>
                    <div>
                        {props.description}
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    {props.children}
                </div>
            </div>
        </Item>
    );
}
 
export default BaseListItem;