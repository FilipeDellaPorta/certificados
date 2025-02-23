const itensPorPagina = 12; // Número de certificados por página
let paginaAtual = 1; // Página inicial
let certificados = []; // Lista completa de certificados
let certificadosFiltrados = []; // Lista de certificados após o filtro de pesquisa

// Função para carregar os certificados do JSON remoto
function carregarCertificados() {
  fetch(
    "https://raw.githubusercontent.com/FilipeDellaPorta/api-certificados/refs/heads/main/certificados.json?token=GHSAT0AAAAAAC6K7BF6XC6L2E4RZMJLPV56Z53PNUQ"
  )
    .then((response) => response.json())
    .then((data) => {
      certificados = data; // Armazena todos os certificados
      certificadosFiltrados = certificados; // Inicializa os certificados filtrados com todos os itens
      gerarListaCertificados(certificadosFiltrados); // Exibe a lista de certificados
    })
    .catch((error) =>
      console.error("Erro ao carregar os certificados:", error)
    );
}

// Função para gerar os certificados na página
function gerarListaCertificados(certificadosParaExibir) {
  const lista = document.getElementById("certificados-lista");
  lista.innerHTML = ""; // Limpa a lista antes de adicionar os novos itens

  // Calcula os índices de início e fim para a página atual
  const startIndex = (paginaAtual - 1) * itensPorPagina;
  const endIndex = startIndex + itensPorPagina;

  // Pega os certificados da página atual
  const certificadosPagina = certificadosParaExibir.slice(startIndex, endIndex);

  certificadosPagina.forEach((certificado) => {
    const li = document.createElement("li");
    li.className = "principal__lista__linha";

    // Cria o link para o certificado
    const link = document.createElement("a");
    link.href = certificado.url;
    link.className = "principal__lista__link";

    // Cria a imagem do certificado e torna a imagem o link
    const img = document.createElement("img");
    img.src = certificado.image;
    img.alt = certificado.titulo;
    img.className = "principal__lista__imagem";

    // Adiciona o título de forma invisível (usando um span)
    const titulo = document.createElement("span");
    titulo.className = "invisivel";
    titulo.textContent = certificado.titulo;

    // Adiciona a imagem e o título invisível ao link, e o link ao item de lista
    link.appendChild(img);
    link.appendChild(titulo); // Título invisível
    li.appendChild(link);

    // Adiciona o item de lista ao contêiner
    lista.appendChild(li);
  });

  // Gera a paginação
  gerarPaginacao(certificadosParaExibir, paginaAtual);
}

// Função para gerar os botões de paginação
function gerarPaginacao(certificadosParaExibir, paginaAtual) {
  const totalPaginas = Math.ceil(
    certificadosParaExibir.length / itensPorPagina
  ); // Calcula o total de páginas
  const paginationContainer = document.getElementById("paginacao");
  paginationContainer.innerHTML = ""; // Limpa a paginação existente

  // Cria o botão de "Página Anterior"
  if (paginaAtual > 1) {
    const prevButton = document.createElement("button");
    prevButton.textContent = "Anterior";
    prevButton.addEventListener("click", () => mudarPagina(paginaAtual - 1));
    paginationContainer.appendChild(prevButton);
  }

  // Cria os botões de página
  for (let i = 1; i <= totalPaginas; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.className = i === paginaAtual ? "active" : "";
    button.addEventListener("click", () => mudarPagina(i));
    paginationContainer.appendChild(button);
  }

  // Cria o botão de "Próxima Página"
  if (paginaAtual < totalPaginas) {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Próxima";
    nextButton.addEventListener("click", () => mudarPagina(paginaAtual + 1));
    paginationContainer.appendChild(nextButton);
  }
}

// Função para mudar a página
function mudarPagina(novaPagina) {
  paginaAtual = novaPagina;
  gerarListaCertificados(certificadosFiltrados); // Recarrega a lista com os certificados filtrados
}

// Função de filtro de certificados (chamada ao digitar na barra de pesquisa)
function filtrarCertificados() {
  const termoBusca = document.getElementById("pesquisar").value.toLowerCase();

  // Filtra a lista de certificados com base no título
  certificadosFiltrados = certificados.filter((certificado) =>
    certificado.titulo.toLowerCase().includes(termoBusca)
  );

  // Se a pesquisa estiver vazia, mostra todos os certificados
  if (!termoBusca) {
    certificadosFiltrados = certificados;
  }

  paginaAtual = 1; // Reseta para a primeira página ao filtrar
  gerarListaCertificados(certificadosFiltrados); // Exibe os certificados filtrados
}

// Função para escutar o click no botão de pesquisa
function configurarBotaoPesquisa() {
  const botaoPesquisa = document.querySelector(".pesquisar__botao");

  // Adiciona o evento de click ao botão
  botaoPesquisa.addEventListener("click", filtrarCertificados);
}

// Gera a lista de certificados ao carregar a página
document
  .getElementById("pesquisar")
  .addEventListener("input", filtrarCertificados);

// Carrega os certificados quando a página estiver pronta
carregarCertificados();
