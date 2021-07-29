export function toggleLoading(bool) {
    return {type:'TOGGLE_LOADING', payload:bool}
}

export function fetchItems(...items) {
    return {type:'FETCH_ITEMS', payload:items}
}

export function newItems(...items) {
    return {type:'NEW_ITEMS', payload:items}
}

export function completeItem(id) {
    return {type:'COMPLETE_ITEM', payload:id}
}

export function rollbackItem(id) {
    return {type:'ROLLBACK_ITEM', payload:id}
}