// Import Aluno's Model
const Aluno = require('./tb_Aluno')
const Cursos = require('./tb_Cursos')
const Disciplinas = require('./tb_Disciplinas')
const Permissao = require('./tb_Permissao')
const Professor = require('./tb_Professor')
const Tipo_Prof = require('./tb_Tipo_Prof')
const Turmas = require('./tb_Turmas')

// Sync with Database
Aluno.sync().then(() => {
    console.log("Tabela tb_alunos criada com sucesso!")
})

Cursos.sync().then(() => {
    console.log("Tabela tb_cursos criada com sucesso!")
})

Disciplinas.sync().then(() => {
    console.log("Tabela tb_disciplinas criada com sucesso!")
})

Permissao.sync().then(() => {
    console.log("Tabela tb_permissao criada com sucesso!")
})

Professor.sync().then(() => {
    console.log("Tabela tb_professor criada com sucesso!")
})

Tipo_Prof.sync().then(() => {
    console.log("Tabela tb_tipo_prof criada com sucesso!")
})

Turmas.sync().then(() => {
    console.log("Tabela tb_turmas criada com sucesso!")
})