const express = require('express')

const { saveCreateNote, getNotes, getNote, delNote, testThings } = require('../controllers/notes.js')

const router = express.Router()

router.get("/", getNotes)
// router.get("/", testThings)
router.get("/:id", getNote)
router.post("/del", delNote)
router.post("/", saveCreateNote)

module.exports = router