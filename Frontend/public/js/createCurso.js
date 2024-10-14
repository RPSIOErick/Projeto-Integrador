// Adiciona um listener ao formulário de classe que aguarda o evento de envio
document.getElementById('class-form').addEventListener('submit', function (event) {
    // Evita o envio padrão do formulário para não recarregar a página
    event.preventDefault(); 

    // Captura os valores dos inputs do formulário
    const className = document.getElementById('class-name').value; // Nome do curso
    const turno = document.getElementById('turno').value; // Turno do curso
    const professor = document.getElementById('prof-coordinator').value; // Professor coordenador
    const workType = document.getElementById('work-type').value; // Tipo de trabalho
    const tgType = document.getElementById('tg-type').value; // Tipo de TG

    // Verifica se existe um array de cursos no LocalStorage, senão cria um array vazio
    let courses = JSON.parse(localStorage.getItem('courses')) || []; 

    // Adiciona o novo curso ao array
    courses.push({
        name: className, // Adiciona o nome do curso
        turn: turno, // Adiciona o turno do curso
        professor: professor, // Adiciona o professor coordenador
        workType: workType, // Adiciona o tipo de trabalho
        tgType: tgType // Inclui o tipo de TG no objeto curso
    });

    // Armazena o array atualizado no LocalStorage
    localStorage.setItem('courses', JSON.stringify(courses)); 

    // Limpa o formulário após o envio
    document.getElementById('class-form').reset(); 

    // Redireciona para a página de listagem de cursos
    window.location.href = '../views/readCurso.html'; 
});

// Adiciona um listener ao campo de tipo de trabalho para monitorar mudanças
document.getElementById('work-type').addEventListener('change', function () {
    const tgOptions = document.getElementById('tg-options'); // Pega o campo de opções de TG
    // Exibe as opções de TG se "TG" for selecionado, senão oculta
    tgOptions.style.display = this.value === 'TG' ? 'block' : 'none'; 
});
