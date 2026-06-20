// Renderizar tarefas na tela (versão com ícones)
function renderTarefas(tarefasParaMostrar) {
  const lista = document.getElementById("task-list");
  lista.innerHTML = "";

  tarefasParaMostrar.forEach((tarefa) => {
    const li = document.createElement("li");
    li.className = "task" + (tarefa.concluida ? " completed" : "");

    // Texto da tarefa
    const span = document.createElement("span");
    span.textContent = tarefa.descricao;
    if (tarefa.concluida) {
      span.classList.add("concluida");
    }

    // Botão concluir/reabrir (ícone)
    const btn = document.createElement("button");
    btn.textContent = tarefa.concluida ? "↩" : "✅";
    btn.title = tarefa.concluida ? "Reabrir" : "Concluir"; // tooltip
    btn.onclick = () => {
      tarefa.concluida ? tarefa.reabrir() : tarefa.concluir();
      salvarTarefas(tarefas);
      renderTarefas(tarefas);
    };

    // Botão excluir (ícone)
    const btnDel = document.createElement("button");
    btnDel.textContent = "❌";
    btnDel.title = "Excluir"; // tooltip
    btnDel.onclick = () => {
      const idxGlobal = tarefas.indexOf(tarefa);
      if (idxGlobal > -1) {
        tarefas.splice(idxGlobal, 1);
      }
      salvarTarefas(tarefas);
      renderTarefas(tarefas);
    };

    li.appendChild(span);
    li.appendChild(btn);
    li.appendChild(btnDel);
    lista.appendChild(li);
  });

  // Atualiza progresso
  document.getElementById("progress-text").textContent = calcularProgresso(tarefas);
  const concluidas = tarefas.filter(t => t.concluida).length;
  const total = tarefas.length;
  const porcentagem = total > 0 ? (concluidas / total) * 100 : 0;
  document.getElementById("progress-fill").style.width = porcentagem + "%";
}
