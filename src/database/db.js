//importar as dependencias do sqlite3
//falar com o terminal
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")


//utilizar db para nossas operações
//serialize - vai rodar um sequencia de codigo
/*
db.serialize(()=>{
    //Com comandos SQL:
    //criar tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //inserir dados
    const query = `
        INSERT INTO places (
            image, name, address, address2, state, city, items
        ) VALUES (
            ?,?,?,?,?,?,?
        );
    `
    const values = [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "Paperside",
        "Guilherme Gemballa, Jardim America",
        "N° 260",
        "Santa Catarina",
        "Rio do Sul",
        "Papéis e Papelão"
    ]

    function afterInsertData(err){
        if(err){
            return console.log("Erro. Tente novamente")
        }
        console.log("Cadastrado com Sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)

    //consultar dados
    
    db.all(`SELECT * FROM places`, function(err, rows){
        if (err){
            return console.log(err)
        }

        console.log("Aqui estão seus dados: ")
        console.log(rows)
    })

    //deletar dados
    
    db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
        if (err){
            return console.log(err)
        }

        console.log("Deletado")
    })    
})
*/