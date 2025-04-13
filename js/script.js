function showMessage(topic, element) {
  // Encontra o div.message-box correspondente ao tópico clicado
  const messageBox = element.nextElementSibling;

  // Define a mensagem com base no tópico
  let message = '';
  switch (topic) {
    case 'introducao':
      message = `Acesse nossas primeiras aulas grátis: <a href="https://encurtador.com.br/Pv6hI" target="_blank">Clique aqui</a>`;
      break;
    case 'manutencao':
      message = 'Contrate nossos serviços de manutenção de turbinas!';
      break;
    case 'instalacao':
      message = 'Entre em contato para saber mais sobre a instalação de sistemas eólicos.';
      break;
    case 'monitoramento':
      message = 'Saiba como monitorar sua energia de forma eficiente.';
      break;
    default:
      message = '';
  }

  // Atualiza o conteúdo da mensagem
  messageBox.innerHTML = `<p>${message}</p>`;

  // Remove a classe 'show' de todas as outras message-box
  document.querySelectorAll('.message-box').forEach((box) => {
    if (box !== messageBox) {
      box.classList.remove('show');
    }
  });

  // Adiciona ou remove a classe 'show' para exibir/ocultar a mensagem com animação
  messageBox.classList.toggle('show');
}
function toggleMenu() {
  const menuOverlay = document.querySelector('.menu-overlay');
  const welcomeBlock = document.getElementById('welcome-block');
  const body = document.body; // Seleciona o corpo do documento

  // Alterna a exibição do menu
  menuOverlay.classList.toggle('show');

  // Exibe o bloco de boas-vindas apenas quando o menu é ativado
  if (menuOverlay.classList.contains('show')) {
    welcomeBlock.style.display = 'block';
    body.classList.add('menu-open'); // Adiciona a classe para desabilitar a rolagem
  } else {
    welcomeBlock.style.display = 'none';
    body.classList.remove('menu-open'); // Remove a classe para habilitar a rolagem
  }
}

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
  const menuOverlay = document.querySelector('.menu-overlay');
  const hamburger = document.querySelector('.hamburger');
  const body = document.body;

  // Verifica se o clique foi fora do menu e do ícone de hambúrguer
  if (
    menuOverlay.classList.contains('show') &&
    !menuOverlay.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    menuOverlay.classList.remove('show');
    document.getElementById('welcome-block').style.display = 'none';
    body.classList.remove('menu-open'); // Remove a classe para opacidade
  }
});
