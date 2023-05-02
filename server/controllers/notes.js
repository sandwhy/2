import mongoose from "mongoose"
import NoteInstance from "../models/note.js"

export const saveCreateNote = async (req,res) => {
    try {
        const note = req.body
        const newNote = new NoteInstance({...note, createdAt:new Date().toISOString()})
        
        console.log(newNote)
    
        await newNote.save()
    } catch (error) {
        res.status(404).json({message:error.message})
    }
} 

export const getNotes = async (req,res) => {
    // console.log("its getting here")
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