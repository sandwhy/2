const mongoose =  require("mongoose")
const NoteInstance =  require("../models/note.js")

const testThings = (req,res) => {
    res.status(200).json({"test":"some things out"})
}

const saveCreateNote = async (req,res) => {
    try {
        const {does, data} = req.body
        if (does == "Create") {
            const newNote = new NoteInstance({...data})
            
            await newNote.save()
            var dat = newNote
        } else if (does == "Save") {
            const filter = {_id: data.id}
            const update = data

            var dat = await NoteInstance.findOneAndUpdate(filter, update, { new: true})
        }
        
        res.status(200).json({data:dat})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
} 

const getNotes = async (req,res) => {
    try {
        const notes = await NoteInstance.find()
        res.status(200).json({data:notes})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

const getNote = async (req,res) => {
    try {
        const {id} = req.params
        const note = await NoteInstance.findById(id)
        res.status(200).json({data:note})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

const delNote = async(req,res) => {
    try {
        const {id} = req.body
        const ok = await NoteInstance.deleteOne({_id:id})
        res.status(200).json({data:ok})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

module.exports = { saveCreateNote, getNote, getNotes, delNote, testThings }