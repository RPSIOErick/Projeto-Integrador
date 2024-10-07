// Import Aluno's Model
const Aluno = require('./tb_Aluno')

// Sync with Database
Aluno.sync().then(() => {
    console.log("Tabela criada com sucesso!")
})

