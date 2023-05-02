export default (state={currentNote:{NaN}}, action) => {
    switch(action.type) {
        case "FETCH_ALL":
            return{
                ...state, notes:action.payload.data
            }
        case "FETCH_ONE":
            return {
                ...state, currentNote:action.payload.data
            }
        default:
            return state
    }
}