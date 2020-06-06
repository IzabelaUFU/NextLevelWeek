//chama o express
const express = require("express")
//executa o express
const server = express()

//pegar o banco de dados
const db = require("./database/db")

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
    //pegar os dados do banco de dados
    db.all(`SELECT * FROM places`, function(err, rows){
        if (err){
            return console.log(err)
        }

        //para ver o numero de dados para mostrar na tela
        const total = rows.length

        //console.log("Aqui estão seus dados: ")
        //console.log(rows)

        //mostar a pagina html com os dados do banco 
        return res.render("resultados-busca.html", {places:rows, total:total})
    })
    
})


//ligar o servidor
server.listen(3000)