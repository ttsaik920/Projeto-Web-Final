// Classe que representa uma tarefa
class Tarefa {
  constructor(
    descricao, 
    concluida = false, 
    prazo = null, 
    prioridade = "media", 
    subtarefas = [], 
    nota = ""
  ) {
    this.descricao = descricao;   // Texto da tarefa
    this.concluida = concluida;   // Status (true/false)
    this.prazo = prazo;           // Data limite (opcional)
    this.prioridade = prioridade; // Prioridade (baixa, média, alta)
    this.subtarefas = subtarefas; // Lista de subtarefas
    this.nota = nota;             // Observações extras
  }

  // Marca a tarefa como concluída
  concluir() { this.concluida = true; }

  // Reabre a tarefa (marca como pendente)
  reabrir() { this.concluida = false; }

  // Edita o texto da tarefa
  editar(novoTexto) { this.descricao = novoTexto; }

  // Adiciona uma subtarefa
  adicionarSubtarefa(sub) { this.subtarefas.push({ descricao: sub, concluida: false }); }
}
