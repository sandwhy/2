import express from 'express'

import { saveCreateNote, getNotes } from '../controllers/notes.js'

const router = express.Router()

router.get("/", getNotes)
router.post("/", saveCreateNote)

export default router