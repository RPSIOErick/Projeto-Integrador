// Seleciona os elementos dos collapses
document.getElementById('toggleCollapse').addEventListener('click', function () {
    const chevronIcon = document.getElementById('chevronIcon');
    chevronIcon.classList.toggle('rotate'); // Alterna a classe 'rotate'
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
