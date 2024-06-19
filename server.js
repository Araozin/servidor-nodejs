import express, { request, response } from 'express'

const app = express()

const users = []

app.post('/user', (req, res) => {

    console.log(req)

    res.send('ok post')

})


app.get('/user', (req, res) => {
    res.send('Ok, deu bom')
}) 

app.listen(3000)
// Criar nossa api de users
// listar users
// Listar users










