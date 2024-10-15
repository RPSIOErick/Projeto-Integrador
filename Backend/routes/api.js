// Import Express Instance
const express = require('express'); 
const multer = require('multer');
const alunoController = require('../controllers/alunoController')
const disciplinasController = require('../controllers/disciplinasController')
const professorController = require('../controllers/professorController')
const cursoController = require('../controllers/cursoController')
const turmaController = require('../controllers/turmaController')
const router = express.Router()

const storage = multer.memoryStorage()
const upload = multer({ storage })

// Routes - Aluno
router.post('/aluno/create', alunoController.createAluno)

router.post('/aluno/upload', upload.single('csv'), alunoController.readAlunoFile)

router.get('/aluno/read', alunoController.readAluno)

router.post('/aluno/update/:id', alunoController.updateAluno)

router.delete('/aluno/delete/:id', alunoController.deleteAluno)


// Routes - Disciplinas
router.post('/disciplinas/create', disciplinasController.createDisciplinas)

router.get('/disciplinas/read', disciplinasController.readDisciplinas)

router.post('/disciplinas/update/:id', disciplinasController.updateDisciplinas)

router.delete('/disciplinas/delete/:id', disciplinasController.deleteDisciplinas)

router.get('/disciplinas/read/:id', disciplinasController.readUniDisc)


//Routes - Professor

router.post('/professor/create', professorController.createProfessor)

router.get('/professor/read', professorController.readProfessor)

router.post('/professor/update/:id', professorController.updateProfessor)

router.put('/professor/status/:id', professorController.changeStatusProfessor)

router.get('/professor/read/:id', professorController.readUniProf)


//Routes - Curso

router.post('/curso/create', cursoController.createCurso)

router.get('/curso/read', cursoController.readCurso)

router.post('/curso/update/:id', cursoController.updateCurso)

router.put('/curso/status/:id', cursoController.changeStatusCurso)

router.get('/curso/read/:id', cursoController.readUniCurso)

//Routes - Turma
router.post('/turma/upload', upload.single('csv'), turmaController.readTurmaFile)

router.post('/turma/create', turmaController.createTurma)

router.get('/turma/read', turmaController.readTurmas)

router.get('/turma/read/:id', turmaController.readUniTurma)

router.delete('/turma/delete/:id', turmaController.deleteTurma);

router.patch('/turma/update/:id', turmaController.updateTurma);

// Export Module
module.exports = router;
