const express = require('express');
const fs = require ('fs');
const app = express();

app.use(express.json());
app.listen(3000)

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

app.get('/todolist/:id', (req, res) =>{
    const { id } = req.params
    let nota = data.find(f => f.id == id)
    res.send(nota)
})

app.get('/todolist', function (req, res) {
    res.send(data)
  })

// Não está funcionando!!!
app.post('/todolist/add'), function (req, res) {
    const body = req.body   
    data.push(body)
    res.send("Nota adicionada!")
}
// Não está funcionando!!!
app.delete('/todolist/deletar/:id', function (req, res){
    const { id } = req.params
    let notaIndex = data.findIndex(f => f.id == id)
    data.slice(notaIndex)
    res.send("Nota deletada!")
})