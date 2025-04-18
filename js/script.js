function showMessage(topic, element) {
  // Encontra o div.message-box correspondente ao tópico clicado
  const messageBox = element.nextElementSibling;

  // Define a mensagem com base no tópico
  let message = "";
  switch (topic) {
    case "introducao":
      message = `Acesse nossas primeiras aulas grátis: <a href="https://encurtador.com.br/Pv6hI" target="_blank">Clique aqui</a>`;
      break;
    case "manutencao":
      message = "Contrate nossos serviços de manutenção de turbinas!";
      break;
    case "instalacao":
      message =
        "Entre em contato para saber mais sobre a instalação de sistemas eólicos.";
      break;
    case "monitoramento":
      message = "Saiba como monitorar sua energia de forma eficiente.";
      break;
    default:
      message = "";
  }

  // Atualiza o conteúdo da mensagem
  messageBox.innerHTML = `<p>${message}</p>`;

  // Remove a classe 'show' de todas as outras message-box
  document.querySelectorAll(".message-box").forEach((box) => {
    if (box !== messageBox) {
      box.classList.remove("show");
    }
  });

  // Adiciona ou remove a classe 'show' para exibir/ocultar a mensagem com animação
  messageBox.classList.toggle("show");
}
function toggleMenu() {
  const menuOverlay = document.querySelector(".menu-overlay");
  const welcomeBlock = document.getElementById("welcome-block");
  const body = document.body; // Seleciona o corpo do documento

  // Alterna a exibição do menu
  menuOverlay.classList.toggle("show");

  // Exibe o bloco de boas-vindas apenas quando o menu é ativado
  if (menuOverlay.classList.contains("show")) {
    welcomeBlock.style.display = "block";
    body.classList.add("menu-open"); // Adiciona a classe para desabilitar a rolagem
  } else {
    welcomeBlock.style.display = "none";
    body.classList.remove("menu-open"); // Remove a classe para habilitar a rolagem
  }
}

// Fecha o menu ao clicar fora dele
document.addEventListener("click", (event) => {
  const menuOverlay = document.querySelector(".menu-overlay");
  const hamburger = document.querySelector(".hamburger");
  const body = document.body;

  // Verifica se o clique foi fora do menu e do ícone de hambúrguer
  if (
    menuOverlay.classList.contains("show") &&
    !menuOverlay.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    menuOverlay.classList.remove("show");
    document.getElementById("welcome-block").style.display = "none";
    body.classList.remove("menu-open"); // Remove a classe para opacidade
  }
});

const quizData = [
  {
    question: "Qual destes países é líder mundial em energia eólica?",
    options: ["China", "Alemanha", "Brasil", "Estados Unidos"],
    correct: 0,
  },
  {
    question: "Qual é a vantagem principal da energia eólica?",
    options: [
      "Baixo custo de instalação",
      "Não emite CO2 durante a operação",
      "Funciona em qualquer localidade",
      "Não precisa de manutenção",
    ],
    correct: 1,
  },
  {
    question:
      "Qual componente principal de uma turbina eólica converte a energia mecânica em elétrica?",
    options: ["Pás do rotor", "Torre", "Gerador", "Nacele"],
    correct: 2,
  },
  {
    question:
      "Qual destas fontes de energia renovável NÃO depende de condições climáticas?",
    options: [
      "Energia Solar",
      "Energia Eólica",
      "Energia Geotérmica",
      "Energia das Ondas",
    ],
    correct: 2,
  },
  {
    question:
      "Qual é o principal material usado na fabricação de painéis solares fotovoltaicos?",
    options: ["Silício", "Alumínio", "Cobre", "Plástico"],
    correct: 0,
  },
  {
    question: "Qual destes é considerado um desafio da energia eólica?",
    options: [
      "Alto consumo de água",
      "Intermitência na geração",
      "Emissão de metano",
      "Produção de resíduos radioativos",
    ],
    correct: 1,
  },
  {
    question:
      "Qual país europeu obtém mais de 40% de sua eletricidade de fontes eólicas?",
    options: ["Alemanha", "Dinamarca", "Espanha", "Holanda"],
    correct: 1,
  },
  {
    question:
      "O que significa a sigla COP nas discussões sobre mudanças climáticas?",
    options: [
      "Conferência de Operações Planetárias",
      "Convenção de Organizações Paralelas",
      "Conferência das Partes",
      "Controle de Ozônio Primário",
    ],
    correct: 2,
  },
  {
    question:
      "Qual destas energias renováveis utiliza matéria orgânica como fonte?",
    options: [
      "Energia Maremotriz",
      "Biomassa",
      "Energia Hidrelétrica",
      "Energia Solar Térmica",
    ],
    correct: 1,
  },
  {
    question: "Qual é a vida útil média de uma turbina eólica moderna?",
    options: ["5-10 anos", "10-15 anos", "20-25 anos", "30-35 anos"],
    correct: 2,
  },
];

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
let currentQuestion = 0;
let score = 0;

function buildQuiz() {
  quizData.forEach((question, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    if (index !== 0) questionDiv.style.display = "none";

    questionDiv.innerHTML = `
          <h3>${index + 1}. ${question.question}</h3>
          ${question.options
            .map(
              (option, i) => `
              <label class="option">
                  <input type="radio" name="question${index}" value="${i}" required>
                  ${option}
              </label>
          `
            )
            .join("")}
      `;

    quizContainer.appendChild(questionDiv);
  });

  document.querySelectorAll(".option input").forEach((input) => {
    input.addEventListener("change", function () {
      this.parentNode.classList.add("selected");
      setTimeout(() => {
        showNextQuestion();
        checkAllAnswered();
      }, 1000);
    });
  });
}

function checkAllAnswered() {
  const answeredQuestions = document.querySelectorAll(
    ".question input:checked"
  ).length;
  if (answeredQuestions === quizData.length) {
    showResults();
  }
}

function showNextQuestion() {
  const currentDiv = document.querySelector(
    `.question:nth-of-type(${currentQuestion + 1})`
  );
  currentDiv.style.display = "none";

  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    document.querySelector(
      `.question:nth-of-type(${currentQuestion + 1})`
    ).style.display = "block";
  }
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".question");
  let numCorrect = 0;

  quizData.forEach((question, index) => {
    const selectedInput = answerContainers[index].querySelector(
      `input[name="question${index}"]:checked`
    );
    if (selectedInput && parseInt(selectedInput.value) === question.correct) {
      numCorrect++;
    }
  });

  resultContainer.innerHTML = `Você acertou ${numCorrect} de ${quizData.length} perguntas!`;
}

buildQuiz();
