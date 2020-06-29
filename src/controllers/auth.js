const express = require('express')
const router = express.Router()

router.get('/sign-in', (req, res) => {
    return res.json('sign-in')
})

router.get('/sign-up', (req, res) => {
    return res.json('sign-up')
})

module.exports = router