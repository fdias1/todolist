import { useEffect } from "react";
import { getItems } from '../services/api'
import List from '../components/List'
import ListItemDone from '../components/ListItem/ListItemDone'
import ListItemPending from '../components/ListItem/ListItemPending'
import FormNewItem from '../components/FormNewItem'
import Loading from '../components/Loading'

import { connect } from 'react-redux'
import { toggleLoading, fetchItems } from '../store/actions/application'


const ToDoList = ({dispatch, pending, done, loading, ...props}) => {

    useEffect(() => {
        async function fetch() {
            dispatch(toggleLoading(true))
            const items = await getItems()
            if(items) {
                dispatch(fetchItems(...items))
            }
            dispatch(toggleLoading(false))
        }
        fetch()
    },[])

    return ( 
        <div className="container">
            <h1 className="display-1 text-center">To-do List - Saipos</h1>
            <Loading display={loading ? 'flex' : 'none'} />
            <div className="row m-4">
                <List title="Pendentes: ">
                    <FormNewItem />
                    {pending && pending.map(el => (
                        <ListItemPending {...el} />
                    ))}
                </List>
                <List title="Feitos: ">
                    {done && done.map(el => (
                        <ListItemDone {...el} />
                    ))}
                </List>
            </div>
        </div>
    );
}
 
const mapState = state => ({...state})
export default connect(mapState)(ToDoList);