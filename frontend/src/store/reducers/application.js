const initialState = {
    loading:false,
    pending:[],
    done:[]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'TOGGLE_LOADING':
            return {
                ...state, 
                loading:action.payload
            }

        case 'FETCH_ITEMS':
            return {
                ...state,
                pending:action.payload.filter(el => el.status ==='pending'),
                done:action.payload.filter(el => el.status ==='done')
            }        
        case 'NEW_ITEMS':
            return {
                ...state,
                pending:[...state.pending, ...action.payload].sort()
            }
        case 'COMPLETE_ITEM':
            return {
                ...state,
                pending:state.pending.filter(el => el.id !== action.payload),
                done:[...state.done, ...state.pending.filter(el => el.id === action.payload)].sort()
            }
        case 'ROLLBACK_ITEM':
            return {
                ...state,
                done:state.done.filter(el => el.id !== action.payload),
                pending:[...state.pending, ...state.done.filter(el => el.id === action.payload)].sort()
            }
    }

}