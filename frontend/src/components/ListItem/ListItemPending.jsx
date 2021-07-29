import React from 'react';
import styled from 'styled-components'
import BaseListItem from './BaseListItem'
import { completeItem } from '../../services/api'

import { connect } from 'react-redux'
import { completeItem as completeItemAction, toggleLoading } from '../../store/actions/application'

const Item = styled.li`
    list-style-type:none;
`

const ListItemPending = ({dispatch, ...props}) => {
    const completeHandler = async (e) => {
        dispatch(toggleLoading(true))
        const resp = await(completeItem(props.id))
        if(resp) {
            dispatch(completeItemAction(props.id))
        }
        dispatch(toggleLoading(false))
    }

    return (
        <BaseListItem {...props}>
                    <button className='btn btn-success' onClick={completeHandler}>
                        Completar
                    </button>
        </BaseListItem>
    );
}
 
const mapState = state => ({...state})
export default connect(mapState)(ListItemPending);