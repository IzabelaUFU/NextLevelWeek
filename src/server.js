//chama o express
const express = require("express")
//executa o express
const server = express()

//configurar pasta publica / arquivos estaticos
server.use(express.static("public"))

//utilizando template engine 
//pedindo
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


//configurar caminhos da miha aplicação

//pagina inicial
//req : requisição
//res : resposta
server.get("/", (req,res) => {
    return res.render("index.html", {title: "Um título"})
})

//criar ponto
server.get("/criar-ponto", (req,res) => {
    return res.render("criar-ponto.html")
})

server.get("/busca", (req,res) => {
    return res.render("resultados-busca.html")
})


//ligar o servidor
server.listen(3000)