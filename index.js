// Função para abrir o popup
function abrirPopup(imagemSrc, descricao) {
    // Seleciona os elementos do popup
    const popupOverlay = document.getElementById('popupOverlay');
    const popupImage = document.getElementById('popupImage');
    const popupDescricao = document.getElementById('popupDescricao');

    // Define a imagem e a descrição no popup
    popupImage.src = imagemSrc; // Define o caminho da imagem
    popupDescricao.textContent = descricao; // Define o texto da descrição

    // Exibe o popup
    popupOverlay.style.display = 'flex';
}

// Função para fechar o popup
function fecharPopup() {
    const popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.style.display = 'none'; // Oculta o popup
}

// Fechar o popup ao clicar fora da área do conteúdo
document.getElementById('popupOverlay').addEventListener('click', (event) => {
    if (event.target === document.getElementById('popupOverlay')) {
        fecharPopup();
    }
});