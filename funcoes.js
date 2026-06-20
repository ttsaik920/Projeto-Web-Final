// Filtra tarefas de acordo com o status (todas, concluídas ou pendentes)
function filtrarTarefas(tarefas, filtro) {
  if (filtro === "completed") {
    return tarefas.filter(t => t.concluida);
  } else if (filtro === "pending") {
    return tarefas.filter(t => !t.concluida);
  }
  return tarefas;
}

// Salva as tarefas no localStorage (persistência de dados)
function salvarTarefas(tarefas) {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// Carrega tarefas do localStorage e recria objetos da classe Tarefa
function carregarTarefas() {
  const dados = localStorage.getItem("tarefas");
  if (!dados) return [];
  return JSON.parse(dados).map(obj => new Tarefa(obj.descricao, obj.concluida));
}

// Calcula o progresso (quantas tarefas concluídas de um total)
function calcularProgresso(tarefas) {
  const total = tarefas.length;
  const concluidas = tarefas.reduce((acc, t) => acc + (t.concluida ? 1 : 0), 0);
  return total > 0 ? `${concluidas} de ${total} concluídas` : "Nenhuma tarefa adicionada";
}
// Função para atualizar data e hora em tempo real
function atualizarDataHora() {
  const agora = new Date();
  const dataHora = agora.toLocaleString("pt-BR");
  document.getElementById("dataHora").innerText = dataHora;
}
