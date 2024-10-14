// Pega o array de cursos armazenados no LocalStorage
let courses = JSON.parse(localStorage.getItem('courses')) || []; 
// Obtém os cursos do LocalStorage ou inicializa um array vazio se não houver cursos armazenados

// Seleciona o contêiner onde os cursos serão exibidos
const listContainer = document.getElementById('classes-list'); 
// Obtém o elemento onde os cursos serão listados

// Verifica se existem cursos cadastrados
if (courses.length === 0) {
    listContainer.innerHTML = '<li>Nenhum curso cadastrado ainda.</li>'; 
    // Exibe mensagem se não houver cursos
} else {
    // Percorre os cursos e cria a estrutura HTML para cada um
    courses.forEach((course, index) => {
        const li = document.createElement('li'); 
        // Cria um item de lista para cada curso
        li.classList.add('card-item'); 
        // Adiciona a classe 'card-item' ao li
        li.innerHTML = `
            <div>
                <strong>Curso:</strong> ${course.name}<br>
                <strong>Turno:</strong> ${course.turn}<br>
                <strong>Professor:</strong> ${course.professor}<br>
                <strong>Trabalho:</strong> ${course.workType}, ${course.tgType} 
            </div>
            <button class="btn-edit-del" onclick="editCourse(${index})">Editar</button> 
            <button class="btn-edit-del" onclick="deleteCourse(${index})">Deletar</button> 
        `;
        listContainer.appendChild(li); 
        // Adiciona o item de lista ao contêiner
    });
}

// Função para excluir curso
function deleteCourse(index) {
    courses.splice(index, 1); 
    // Remove o curso do array
    localStorage.setItem('courses', JSON.stringify(courses)); 
    // Atualiza o LocalStorage com o novo array
    location.reload(); 
    // Recarrega a página para atualizar a lista
}

// Função para redirecionar à tela de edição
function editCourse(index) {
    localStorage.setItem('editIndex', index); 
    // Armazena o índice do curso a ser editado
    window.location.href = '../views/updateCurso.html'; 
    // Redireciona para a página de edição
}
