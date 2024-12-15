import gerarListaCertificados from "./geraListaCertificados.js";
import certificados from "./listaCertificadosCards.js"; // Importa a lista de certificados

// Variável para armazenar o resultado da busca
let certificadosFiltrados = certificados;
let currentPage = 1; // Mantém controle da página atual

function buscaCertificado(evento) {
  evento.preventDefault();

  const dadosDePesquisa = document
    .querySelector("[data-pesquisa]")
    .value.toLowerCase();

  // Faz a busca na lista de certificados
  certificadosFiltrados = certificados.filter((certificado) =>
    certificado.titulo.toLowerCase().includes(dadosDePesquisa)
  );

  currentPage = 1; // Reseta para a primeira página ao realizar uma nova busca

  if (certificadosFiltrados.length > 0) {
    // Gera a lista filtrada de certificados com paginação
    gerarListaCertificados(certificadosFiltrados, currentPage);
  } else {
    // Caso não encontre resultados
    const lista = document.getElementById("certificados-lista");
    lista.innerHTML = `<h2 class='mensagem__titulo'>Não existem certificados com este termo.</h2>`;

    // Remove os botões de paginação
    const paginationContainer = document.getElementById("paginacao");
    if (paginationContainer) {
      paginationContainer.innerHTML = "";
    }
  }
}

// Certifica-se que o DOM está completamente carregado antes de adicionar os eventos
document.addEventListener("DOMContentLoaded", () => {
  const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
  const campoDePesquisa = document.querySelector("[data-pesquisa]");

  // Evento ao clicar no botão de busca
  if (botaoDePesquisa) {
    botaoDePesquisa.addEventListener("click", buscaCertificado);
  }

  // Evento ao digitar no campo de busca para busca dinâmica
  if (campoDePesquisa) {
    campoDePesquisa.addEventListener("input", buscaCertificado);
  }
});

export default buscaCertificado;
