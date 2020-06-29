const express = require('express')
const { request, response } = require('express')

const authController = require ('./controllers/auth')

const app = express()//Abrindo servidor

app.use('/auth', authController)


app.get('/', (req, res) => {//Path inicial
    return res.json('Api running')
})

app.listen(3001, () => {//escutando porta 
  console.log('Estou ouvindo!!')
})