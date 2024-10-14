const Turmas = require('../models/tb_Turmas');
const Aluno = require('../models/tb_Aluno')
const xlsx = require('xlsx');
const { Op } = require('sequelize');

const readTurmaFile = async (req, res) => {
    try {
        
        if (!req.file) {
            return res.status(400).json({ error: "Arquivo CSV não identificado." });
        }

        const sigaFile = req.file.buffer;
        const alunoWb = xlsx.read(sigaFile, { type: 'buffer' });
        const alunoWs = alunoWb.Sheets[alunoWb.SheetNames[0]];
        const data = xlsx.utils.sheet_to_json(alunoWs);

        if (data.length === 0) {
            return res.status(400).json({ error: "Nenhum dado encontrado no arquivo." });
        }

        // Mapeia os dados para incluir apenas RA e Nome
        const alunosFiltrados = data.map((item) => ({
            RA: item["20241"] ? item["20241"].trim() : null,
            Nome: item["IAL021A "] ? item["IAL021A "].trim() : null
        }))
        .filter(aluno => aluno.RA && aluno.Nome && aluno.RA !== "RA" && aluno.Nome !== "ALUNO");

        // Verificar se os alunos já existem no banco
        const alunosExistentes = await Aluno.findAll({
            where: {
                RA: alunosFiltrados.map(a => a.RA) 
            }
        });

        // Mapeia os alunos encontrados e seus respectivos Cod_Aluno
        const alunosConfirmados = alunosExistentes.map(aluno => ({
            RA: aluno.RA,
            Nome: aluno.Nome,
            Cod_Aluno: aluno.Cod_Aluno 
        }));

        // Retorna os alunos encontrados para confirmação
        res.status(200).json({ message: "Alunos confirmados.", alunosConfirmados });
    } catch (error) {
        console.error("Erro ao ler o arquivo: ", error);
        res.status(500).json({ error: "Erro ao ler o arquivo." });
    }
};

const createTurma = async (req, res) => {
    try {
        const { Nome, Responsavel, Turno, Semestre, Ano, alunos, disciplina } = req.body;

        // Cria a turma
        const novaTurma = await Turmas.create({
            Nome,
            Responsavel,
            Turno,
            Semestre,
            Ano,
            Status: true 
        });

        await Promise.all(alunos.map(async (Cod_Aluno) => {
            await Turmas.create({
                Cod_Aluno,      
                ID_Disc: disciplina,  
                Nome,        
                Responsavel,     
                Turno,       
                Semestre,   
                Ano,           
                Status: true    
            });
        }));

        res.status(201).json({ message: "Turma e alunos cadastrados com sucesso!" });
    } catch (error) {
        console.error("Erro ao criar a turma: ", error);
        res.status(500).json({ error: "Erro ao criar a turma." });
    }
};

const readTurmas = async (req, res) => {
    try {
        const classes = await Turmas.findAll({
        attributes: ['Nome', 'Responsavel', 'Turno', 'Semestre', 'Ano'], 
        group: ['Nome', 'Responsavel', 'Turno', 'Semestre', 'Ano'], 
        });

        res.json(classes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao ler as turmas do sistema' });
    }
};
  
const readUniTurma = async (req, res) => {
    const { id } = req.params; 
    try {
        const classDetails = await Turmas.findAll({
            where: { ID_Disc: id },  
            attributes: ['Nome', 'Responsavel', 'Turno', 'Semestre', 'Ano', 'Cod_Aluno'],
        });

        if (!classDetails.length) {
            return res.status(404).json({ error: 'Turma não encontrada' });
        }

  
        const { Nome, Responsavel, Turno, Semestre, Ano } = classDetails[0];


        const students = classDetails.map(record => record.Cod_Aluno);

 
        const detailedClass = {
            Nome,
            Responsavel,
            Turno,
            Semestre,
            Ano,
            students, 
        };

        res.json(detailedClass);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

const deleteTurma = async (req, res) => {

    try
    {
        const { id } = req.params;

        const turma = await Turmas.findOne({ where: { ID_Disc: id}})

        turma.destroy();

        res.status(200).json({ message: "Turma deletada com sucesso!" });
    }

    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}


module.exports = {
    readTurmaFile,
    createTurma,
    readTurmas,
    readUniTurma,
    deleteTurma
};
