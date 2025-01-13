const itemsPerPage = 12; // Número de itens por página
let currentPage = 1; // Página inicial
let certificados = []; // Armazena os certificados carregados

function gerarListaCertificados(listaDeCertificados) {
  const lista = document.getElementById("certificados-lista"); // Seleciona o elemento da lista no DOM
  
  // Limpa a lista antes de gerar os novos itens
  lista.innerHTML = "";

  // Calcula o índice de início e fim para a página atual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const certificadosPagina = listaDeCertificados.slice(startIndex, endIndex);

  certificadosPagina.forEach((certificado) => {
    const li = document.createElement("li"); // Cria o elemento de lista
    li.className = "principal__lista__linha"; // Adiciona a classe para o <li>

    const link = document.createElement("a"); // Cria o elemento <a>
    link.href = certificado.url; // Define a URL do certificado
    link.className = "principal__lista__link"; // Adiciona a classe ao link

    const img = document.createElement("img"); // Cria o elemento de imagem
    img.src = certificado.image; // Define o caminho da imagem
    img.alt = certificado.titulo; // Define o texto alternativo da imagem
    img.className = "principal__lista__imagem"; // Adiciona a classe para a imagem

    link.appendChild(img); // Insere a imagem dentro do link
    li.appendChild(link); // Insere o link dentro do item de lista

    lista.appendChild(li); // Adiciona o item da lista ao <ul> ou <ol>
  });

  renderPaginacao(listaDeCertificados); // Atualiza os botões de paginação
}

// Função para criar os botões de paginação
function renderPaginacao(listaDeCertificados) {
  const totalPages = Math.ceil(listaDeCertificados.length / itemsPerPage);
  const paginationContainer = document.getElementById("paginacao");

  // Limpa a paginação existente
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.className = i === currentPage ? "active" : "";
    button.addEventListener("click", () => {
      currentPage = i; // Atualiza a página atual
      gerarListaCertificados(listaDeCertificados); // Re-renderiza a lista
    });
    paginationContainer.appendChild(button);
  }
}

// Função para buscar certificados dinamicamente
function buscaCertificado(evento) {
  evento.preventDefault();

  const dadosDePesquisa = document
    .querySelector("[data-pesquisa]")
    .value.toLowerCase();

  // Filtra os certificados de acordo com o termo digitado
  const certificadosFiltrados = certificados.filter((certificado) =>
    certificado.titulo.toLowerCase().includes(dadosDePesquisa)
  );

  currentPage = 1; // Reseta para a primeira página ao realizar uma nova busca

  if (certificadosFiltrados.length > 0) {
    gerarListaCertificados(certificadosFiltrados);
  } else {
    const lista = document.getElementById("certificados-lista");
    lista.innerHTML = `<h2 class='mensagem__titulo'>Não existem certificados com este termo.</h2>`;

    // Remove os botões de paginação
    const paginationContainer = document.getElementById("paginacao");
    if (paginationContainer) {
      paginationContainer.innerHTML = "";
    }
  }
}

// Função para carregar os certificados do JSON remoto
function carregarCertificados() {
  fetch("https://raw.githubusercontent.com/FilipeDellaPorta/certificados/main/certificados.json")
    .then(response => response.json())
    .then(data => {
      certificados = data; // Armazena os certificados carregados
      gerarListaCertificados(certificados); // Gera a lista inicial
    })
    .catch(error => console.error("Erro ao carregar os certificados:", error));
}

// Garante que a busca funcione corretamente
document.addEventListener("DOMContentLoaded", () => {
  carregarCertificados();

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
