import axios from "axios"
// baseURL:process.env.DEVURL
const API = axios.create({baseURL:"http://localhost:5000"})

export const fetchNotes = () => API.get("/notes")
export const saveCreateNote = (formData) => API.post(`/notes`, formData)