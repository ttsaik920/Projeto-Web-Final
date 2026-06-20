// Carrega tarefas salvas do localStorage
let tarefas = carregarTarefas();

// Renderiza as tarefas na tela ao iniciar
renderTarefas(tarefas);

// Evento para adicionar nova tarefa
document.getElementById("task-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const input = document.getElementById("task-input");
  const descricao = input.value.trim();

  if (descricao !== "") {
    const novaTarefa = new Tarefa(descricao); // Cria objeto da classe Tarefa
    tarefas.push(novaTarefa);                 // Adiciona ao array
    salvarTarefas(tarefas);                   // Persiste no localStorage
    renderTarefas(tarefas);                   // Atualiza lista na tela
    input.value = "";                         // Limpa campo
  }
});

// Evento para aplicar filtros (Todas, Concluídas, Pendentes)
document.querySelectorAll("#filter-section button").forEach(btn => {
  btn.addEventListener("click", () => {
    const filtro = btn.getAttribute("data-filter");
    const filtradas = filtrarTarefas(tarefas, filtro);
    renderTarefas(filtradas);
  });
});

// Função AJAX para carregar frase motivacional de API externa
async function carregarFraseMotivacional() {
  try {
    const resposta = await fetch("https://api.adviceslip.com/advice");
    const dados = await resposta.json();
    document.getElementById("progress-text").textContent = "💡 " + dados.slip.advice;
  } catch (erro) {
    console.error("Erro ao carregar frase motivacional", erro);
  }
}

// Função para mostrar data e hora atual
function mostrarDataHora() {
  const agora = new Date();
  const data = agora.toLocaleDateString("pt-BR");
  const hora = agora.toLocaleTimeString("pt-BR");
  document.getElementById("data-hora-text").textContent = `📅 ${data} ⏰ ${hora}`;
}

// Inicialização da aplicação
document.addEventListener("DOMContentLoaded", () => {
  // Chama frase motivacional
  carregarFraseMotivacional();

  // Atualiza data/hora a cada segundo
  setInterval(mostrarDataHora, 1000);
});