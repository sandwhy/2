const Users = require("../models/user.js")

const getUsers = async (req,res) => {
    try {
        const users = await Users.find()
        res.status(200).json({data:users})
    } catch (error) {
        res.status(404).json({message:`something went wrong ${error.message}`})
    }
}

module.exports = {getUsers}