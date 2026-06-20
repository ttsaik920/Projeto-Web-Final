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
// Função para buscar frase motivacional de API externa
async function carregarFrase() {
  try {
    const resposta = await fetch("https://api.quotable.io/random");
    const dados = await resposta.json();
    document.getElementById("frase").innerText = `"${dados.content}" — ${dados.author}`;
  } catch (erro) {
    document.getElementById("frase").innerText = "Mantenha o foco e continue!";
  }
}

