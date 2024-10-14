// Import Express Instance
const express = require('express'); 
const multer = require('multer');
const alunoController = require('../controllers/alunoController')

const router = express.Router()

const storage = multer.memoryStorage()
const upload = multer({ storage })

// Routes - Aluno
router.post('/aluno', alunoController.createAluno)

router.post('/aluno/upload', upload.single('csv'), alunoController.readAluno)


// Export Module
module.exports = router;
