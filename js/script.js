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