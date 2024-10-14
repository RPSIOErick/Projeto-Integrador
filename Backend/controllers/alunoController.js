const xlsx = require('xlsx');
const Aluno = require('../models/tb_Aluno');

const createAluno = async (req, res) => {
    try {
        const { ra, nome } = req.body;
        
        // Verificar se os dados estão vindo no body
        console.log('Dados recebidos:', { ra, nome });

        // Criar o aluno no banco de dados
        const aluno = await Aluno.create({ ra, nome });
        
        // Retorna o aluno criado
        res.status(201).json(aluno);
    } catch (error) {
        // Log do erro para ver os detalhes
        console.error('Erro ao criar aluno:', error);

        res.status(500).json({ error: "Erro ao criar alunos." });
    }
};

const readAluno = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "Arquivo CSV não identificado." });
        }

        const sigaFile = req.file.buffer;
        const alunoWb = xlsx.read(sigaFile, { type: 'buffer' });
        const alunoWs = alunoWb.Sheets[alunoWb.SheetNames[0]];
        const data = xlsx.utils.sheet_to_json(alunoWs);

        // Verifica se há dados lidos
        if (data.length === 0) {
            return res.status(400).json({ error: "Nenhum dado encontrado no arquivo." });
        }

        // Mapeia os dados para obter apenas RA e Nome
        const alunosFiltrados = data.map((item) => ({
            RA: item["20241"] ? item["20241"].trim() : null, // Acesse e remova espaços em branco do RA
            Nome: item["IAL021A "] ? item["IAL021A "].trim() : null // Acesse e remova espaços em branco do Nome
        }))
        .filter(aluno => aluno.RA && aluno.Nome && aluno.RA !== "RA" && aluno.Nome !== "ALUNO"); // Filtra alunos que têm RA e Nome válidos

        res.send(alunosFiltrados);
    } catch (error) {
        console.error("Erro ao ler o arquivo: ", error);
        res.status(500).json({ error: "Erro ao ler o arquivo." });
    }
};


module.exports = {
    createAluno,
    readAluno
};
