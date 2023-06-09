import * as api from "../api"

export const getNotes = () => async(dispatch) => {
    // console.log("getting notes")
    try {
        const {data} = await api.fetchNotes()
        // console.log(check)
        // console.log("cling data from actions", data.data)

        // const dat = "ok"
        dispatch({type:"FETCH_ALL", payload:data})
    } catch (error) {
        console.log("from getnotes,", error)
    }
}
export const getNote = (id) => async (dispatch) => {
    // console.log("getting notes local00000")
    try {
        const {data} = await api.fetchNote(id)
        // console.log("checking get note data:", data)
        dispatch({type:"FETCH_ONE", payload:data})
    } catch (error) {
        console.log("from getnote,", error)
    }
}

export const saveCreateNote = (dos, dat) => async (dispatch) => {
    try {
        const params = {does: dos, data: dat}
        const {data} = await api.saveCreateNote(params)
        dispatch({type:"FETCH_ONE", payload:data})
    } catch (error) {
        console.log("from saveCreateNote,", error)
    }
}

export const delNote = (dat) => async(dispatch) => {
    try {  
        const {data} = await api.delNote({id:dat})
        dispatch({type:"RESET_NOTE"})
    } catch (error) {
        console.log("from delNote", error)
    }
}