import certificados from "./listaCertificadosCards.js";

const itemsPerPage = 16; // Número de itens por página
let currentPage = 1; // Página inicial

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
  const paginationContainer = document.getElementById("paginacao"); // Adicione um container para paginação no HTML

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

// Gera a lista inicial ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  gerarListaCertificados(certificados);
});

export default gerarListaCertificados;
