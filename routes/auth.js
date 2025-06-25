const express = require('express')
const router = express.Router()
const login = require('../controllers/auth')

let {people} = require('../data')


router.post('/', login)

module.exports = router