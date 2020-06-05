//chama o express
const express = require("express")
//executa o express
const server = express()

//configurar pasta publica / arquivos estaticos
server.use(express.static("public"))

//configurar caminhos da miha aplicação

//pagina inicial
//req : requisição
//res : resposta
server.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html")
})

//criar ponto
server.get("/criar-ponto", (req,res) => {
    res.sendFile(__dirname + "/views/criar-ponto.html")
})


//ligar o servidor
server.listen(3000)