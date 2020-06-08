//chama o express
const express = require("express")
    //executa o express
const server = express()

//pegar o banco de dados
const db = require("./database/db")

//configurar pasta publica / arquivos estaticos
server.use(express.static("public"))

//habilitar uso do req.body
server.use(express.urlencoded({ extended: true }))

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
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um título" })
})

//criar ponto
server.get("/criar-ponto", (req, res) => {
    return res.render("criar-ponto.html")
})

server.post("/savepoint", (req, res) => {

    //return res.send("ok") teste
    //req.body: o corpo do nosso form
    //console.log(req.body)

    //inserir dados do banco
    const query = `
        INSERT INTO places (
            image, name, address, address2, state, city, items
        ) VALUES (
            ?,?,?,?,?,?,?
        );
    `
    const values = [
        req.body.image, req.body.name, req.body.address, req.body.address2, req.body.state, req.body.city, req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            console.log("err")
            return res.send('Erro no Cadastro. Tente novamente')
        }
        console.log("Cadastrado com Sucesso")
            //console.log(this)

        //pagina de sucesso
        return res.render("criar-ponto.html", { saved: true })
    }

    db.run(query, values, afterInsertData)

})

//busca
server.get("/busca", (req, res) => {
    const search = req.query.search

    if (search == " ") {
        //pesquisa vazia
        //mostar a pagina html com os dados do banco 
        return res.render("resultados-busca.html", { total: 0 })
    }
    
    //pegar os dados do banco de dados
    db.all(`SELECT * FROM places WHERE city `, function(err, rows) {
        if (err) {
            console.log("Erro na consulta!");
        }
        console.log(rows.length)
        //para ver o numero de dados para mostrar na tela
        const total = rows.length

        //console.log("Aqui estão seus dados: ")
        //console.log(total)

        //mostar a pagina html com os dados do banco 
        return res.render("resultados-busca.html", { places: rows, total: total })
    });

 //LIKE '%${search}%'   image, name, address, address2, state, city,
});


//ligar o servidor
server.listen(3000)