// Carregar os dados do curso a ser editado
const editIndex = localStorage.getItem('editIndex'); 
// Recupera o índice do curso a ser editado armazenado no LocalStorage
const courses = JSON.parse(localStorage.getItem('courses')) || []; 
// Recupera a lista de cursos, ou inicializa como array vazio se não houver cursos
const course = courses[editIndex]; 
// Seleciona o curso correspondente ao índice para edição

// Preenche os campos do formulário com os dados do curso selecionado
document.getElementById('class-name').value = course.name; // Preenche o campo do nome do curso
document.getElementById('turno').value = course.turn; // Preenche o campo do turno
document.getElementById('prof-coordinator').value = course.professor; // Preenche o campo do professor
document.getElementById('work-type').value = course.workType; // Preenche o campo do tipo de trabalho

// Adiciona um evento para salvar as alterações no formulário de edição
document.getElementById('edit-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Atualiza os dados do curso com os valores preenchidos no formulário
    course.name = document.getElementById('class-name').value; // Atualiza o nome do curso
    course.turn = document.getElementById('turno').value; // Atualiza o turno
    course.professor = document.getElementById('prof-coordinator').value; // Atualiza o professor
    course.workType = document.getElementById('work-type').value; // Atualiza o tipo de trabalho

    // Salva as alterações no array de cursos e atualiza o LocalStorage
    courses[editIndex] = course; // Atualiza o curso no array de cursos
    localStorage.setItem('courses', JSON.stringify(courses)); // Armazena o array atualizado no LocalStorage

    // Redireciona para a página de listagem após salvar as alterações
    window.location.href = '../views/readCurso.html'; // Redireciona para a página de listagem
});

// Adiciona um listener ao campo de tipo de trabalho para monitorar mudanças
document.getElementById('work-type').addEventListener('change', function () {
    const tgOptions = document.getElementById('tg-options'); // Pega o campo de opções de TG
    // Exibe as opções de TG se "TG" for selecionado, senão oculta
    tgOptions.style.display = this.value === 'TG' ? 'block' : 'none'; 
});