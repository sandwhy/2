import axios from "axios"
// baseURL:process.env.DEVURL
const API = axios.create({baseURL:"http://localhost:5000"})

export const fetchNotes = () => API.get("/notes")
export const fetchNote = (id) => API.get(`/notes/${id}`)
export const saveCreateNote = (params) => API.post(`/notes`, params)
export const delNote = (id) => API.get('/notes/del', id)