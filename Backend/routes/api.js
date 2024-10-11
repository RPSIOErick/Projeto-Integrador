// Import Express Instance
const express = require('express'); 
const multer = require('multer');
const alunoController = require('../controllers/alunoController')
const disciplinasController = require('../controllers/disciplinasController')
const router = express.Router()

const storage = multer.memoryStorage()
const upload = multer({ storage })

// Routes - Aluno
router.post('/aluno', alunoController.createAluno)

router.post('/aluno/upload', upload.single('csv'), alunoController.readAluno)


// Routes - Disciplinas
router.post('/disciplinas/create', disciplinasController.createDisciplinas)

router.get('/disciplinas/read', disciplinasController.readDisciplinas)

router.post('/disciplinas/update/:id', disciplinasController.updateDisciplinas)

router.delete('/disciplinas/delete/:id', disciplinasController.deleteDisciplinas)

router.get('/disciplinas/read/:id', disciplinasController.readUniDisc)

// Export Module
module.exports = router;
