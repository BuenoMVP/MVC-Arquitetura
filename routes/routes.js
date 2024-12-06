const express = require('express')
const router = express.Router()

const {concatenaString} = require('../controllers/routerController')

router.get('/', concatenaString)

module.exports = router