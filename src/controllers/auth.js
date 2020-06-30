const express = require('express')

const { Account }= require('../models')
const router = express.Router()

router.get('/sign-in', (req, res) => {
    return res.json('sign-in')
})

router.get('/sign-up', async (req, res) => {

const result = await Account.create({email: 'juanpablo192.dreaw@gmail.com', senha: '123456'})
console.log(result)

    return res.json('sign-up')
})

module.exports = router