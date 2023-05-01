import * as api from "../api"

export const getNotes = (check) => async(dispatch) => {
    try {
        const {data} = await api.fetchNotes()
        // console.log(check)
        // console.log("cling data from actions")
        // console.log(data.data)
        // const dat = "ok"
        dispatch({type:"FETCH_ALL", payload:data})
    } catch (error) {
        console.log("from getnotes,", error)
    }
}