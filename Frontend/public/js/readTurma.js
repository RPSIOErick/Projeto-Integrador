// Seleciona os elementos dos collapses
const toggleCollapse = document.getElementById('toggleCollapse');
const toggleCollapse2 = document.getElementById('toggleCollapse2');

toggleCollapse.addEventListener('click', () => {
    const collapseExample = document.getElementById('collapseExample');
    collapseExample.classList.toggle('show');

    // Rotaciona o ícone da seta
    const chevron = toggleCollapse.querySelector('.chevron');
    chevron.classList.toggle('rotate');
});

toggleCollapse2.addEventListener('click', () => {
    const collapseExample2 = document.getElementById('collapseExample2');
    collapseExample2.classList.toggle('show');

    // Rotaciona o ícone da seta
    const chevron2 = toggleCollapse2.querySelector('.chevron');
    chevron2.classList.toggle('rotate');
});

// Função para ocultar/mostrar um card
document.querySelectorAll('.eye-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        const card = this.closest('.card'); // Encontra o card pai
        const isHidden = this.name === "eye-off"; // Verifica se o ícone é eye-off

        // Se o card estava visível, mude para oculto
        if (isHidden) {
            this.setAttribute('name', 'eye'); // Muda o ícone para 'eye'
            // Move o card para o segundo colapso
            document.getElementById('collapseExample2').appendChild(card);
        } else {
            this.setAttribute('name', 'eye-off'); // Muda o ícone de volta para 'eye-off'
            // Move o card de volta para o primeiro colapso
            document.getElementById('collapseExample').appendChild(card);
        }
    });
});
