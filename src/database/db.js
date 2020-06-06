//importar as dependencias do sqlite3
//falar com o terminal
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//utilizar db para nossas operações
//serialize - vai rodar um sequencia de codigo
db.serialize(()=>{
    //Com comandos SQL:
    //criar tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            
        );
    `)

    //inserir dados


    //consultar dados

    //deletar dados
})