import gerarListaCertificados from "./geraListaCertificados.js";
import certificados from "./listaCertificadosCards.js"; // Importa a lista de certificados

function buscaCertificado(evento) {
  evento.preventDefault();

  const dadosDePesquisa = document.querySelector("[data-pesquisa]").value.toLowerCase();

  // Faz a busca na lista de certificados
  const busca = certificados.filter((certificado) =>
    certificado.titulo.toLowerCase().includes(dadosDePesquisa)
  );

  const lista = document.getElementById("certificados-lista"); // Seleciona o elemento da lista no DOM

  // Limpa a lista de certificados anterior
  lista.innerHTML = "";

  if (busca.length > 0) {
    // Gera a lista filtrada de certificados
    gerarListaCertificados(busca);
  } else {
    // Caso não encontre resultados
    lista.innerHTML = `<h2 class='mensagem__titulo'>Não existem certificados com este termo.</h2>`;
  }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener("click", buscaCertificado);

// Certifica-se que o DOM está completamente carregado antes de adicionar o evento
document.addEventListener("DOMContentLoaded", () => {
    const campoDePesquisa = document.querySelector("[data-pesquisa]");
    
    if (campoDePesquisa) {
      // Adiciona o evento de input ao campo de pesquisa para busca dinâmica
      campoDePesquisa.addEventListener("input", buscaCertificado);
    }
  });

export default buscaCertificado;
