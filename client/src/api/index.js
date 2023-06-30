import axios from "axios"

const URL = process.env.REACT_APP_URL
const API = axios.create({baseURL:URL})

export const fetchNotes = () => API.get("/notes")
export const fetchNote = (id) => API.get(`/notes/${id}`)
export const saveCreateNote = (params) => API.post(`/notes`, params)
export const delNote = (id) => API.post('/notes/del', id)