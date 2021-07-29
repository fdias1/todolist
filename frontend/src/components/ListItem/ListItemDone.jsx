import React from 'react';
import styled from 'styled-components'
import BaseListItem from './BaseListItem'
import RollbackForm from './RollbackForm'

const Item = styled.li`
    list-style-type:none;
`

const ListItemDone = (props) => {
    return (
        <BaseListItem {...props}>
            {<RollbackForm id={props.id} />}
        </BaseListItem>
    );
}
 
export default ListItemDone;