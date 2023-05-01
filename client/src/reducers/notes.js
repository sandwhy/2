export default (state = {}, action) => {
    switch(action.type) {
        case "FETCH_ALL":
            return{
                ...state, notes:action.payload.data
            }
        case "FETCH_ONE":
            return {
                ...state
            }
        default:
            return state
    }
}