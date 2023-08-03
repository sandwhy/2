const express = require("express")

const { getUsers } = require("../controllers/users.js")

const router = express.Router()

router.get("/list", getUsers)

module.exports = router