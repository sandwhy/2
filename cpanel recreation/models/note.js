const mongoose = require("mongoose")

const noteSchema = mongoose.Schema({
    title: String,
    note: String,
})

const NoteInstance = mongoose.model("NoteInstance", noteSchema)

module.exports = NoteInstance