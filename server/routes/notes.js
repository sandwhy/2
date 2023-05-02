import express from 'express'

import { saveCreateNote, getNotes, getNote } from '../controllers/notes.js'

const router = express.Router()

router.get("/", getNotes)
router.get("/:id", getNote)
router.post("/", saveCreateNote)

export default router