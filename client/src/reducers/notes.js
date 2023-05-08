export default (state={currentNote:{}}, action) => {
    switch(action.type) {
        case "FETCH_ALL":
            return{
                ...state, notes:action.payload.data
            }
        case "FETCH_ONE":
            return {
                ...state, currentNote:action.payload.data
            }
        case "RESET_NOTE":
            return {
                ...state, currentNote:{}
            }
        default:
            return state
    }
}