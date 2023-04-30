import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title: String,
    note: String,
})

const NoteInstance = mongoose.model("NoteInstance", noteSchema)

export default NoteInstance