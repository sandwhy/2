import mongoose from "mongoose"
import NoteInstance from "../models/note.js"

export const saveCreateNote = async (req,res) => {
    console.log("going to the place")
    try {
        const {does, data} = req.body
        if (does == "create") {
            const newNote = new NoteInstance({...data})
            
            console.log(newNote) 
            
            await newNote.save()
            var dat = newNote
            console.log("new note",dat)
        } else if (does == "save") {
            console.log("checking dataid", data, data.id)
            const filter = {_id: data.id}
            const update = data

            var dat = await NoteInstance.findOneAndUpdate(filter, update, { new: true})
            console.log(dat)
        }
        
        res.status(200).json({data:dat})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
} 

export const getNotes = async (req,res) => {
    console.log("getting notes")
    try {
        const notes = await NoteInstance.find()
        // const notes = "ok"
        // console.log(notes)
        res.status(200).json({data:notes})
    } catch (error) {
        res.status(404).json({message:error.message})
        
    }
}

export const getNote = async (req,res) => {
    try {
        const {id} = req.params
        // console.log("checking id:", id)
        const note = await NoteInstance.findById(id)
        res.status(202).json({data:note})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}