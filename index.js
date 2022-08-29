const express = require('express');
const fs = require ('fs');
const app = express();

app.use(express.json());
app.listen(3003)

const data = [
    {
        "title": "Comprar pizza.",
        "terminado": false,
        "id": 1
    },
    {
        "title": "Ir na feira do livro.",
        "terminado": false,
        "id": 2
    },
    {
        "title": "Comprar linha branca.",
        "terminado": false,
        "id": 3
    },
]

app.delete('/todolist/deletar/:id', function (req, res){
    const { id } = req.params
    let notaIndex = data.findIndex(f => f.id == id)
    data.splice(notaIndex, 1)
    res.send("Nota deletada!")
})

app.get('/todolist/:id', (req, res) => {
    const { id } = req.paramss
    let nota = data.find(f => f.id == id)
    res.send(nota)
})

app.post('/todolist/nota/adicionar', function (req, res) {
    const body = req.body   
    data.push(body)
    res.send("Nota adicionada!")
})

app.get('/todolist', function (req, res) {  
    res.send(data)
  })
