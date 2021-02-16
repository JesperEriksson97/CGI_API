const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', userController.getExampleUser)

const connection = "mongodb+srv://dbuser:<password>@democluster.d7d0v.mongodb.net/<dbname>?retryWrites=true&w=majority"

module.exports = router