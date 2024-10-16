/*
    FALTA: AO CLICAR NO BOTÃO, APARECER A PAGINA CORREPONDENTE (POR ENQUANTO FUNCIONANDO EM DISPLAY: NONE VIA STYLE NO HTML)
*/

function toggleActive(selectedButton) 
{
    // Seleciona todos os botões com a classe 'multiform-btn'
        const buttons = document.getElementsByClassName('multiform-btn');
    
    // Remove a classe 'multiform-active' de todos os botões e adiciona 'multiform-disable'
        for (let i = 0; i < buttons.length; i++) 
        {
            buttons[i].classList.remove('multiform-active');
            buttons[i].classList.add('multiform-disable');
        }

    // Adiciona 'multiform-active' ao botão clicado e remove 'multiform-disable'
        selectedButton.classList.add('multiform-active');
        selectedButton.classList.remove('multiform-disable');
}


function displayForm()
{

}