const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', userController.getExampleUser)

router.post('/', userController.saveUser) 

module.exports = router