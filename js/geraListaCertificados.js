const itensPorPagina = 12;
let paginaAtual = 1;
let certificados = [];
let certificadosFiltrados = [];

function carregarCertificados() {
  fetch('../certificados.json')
    .then((response) => response.json())
    .then((data) => {
      certificados = data;
      certificadosFiltrados = certificados;
      gerarListaCertificados(certificadosFiltrados);
    })
    .catch((error) =>
      console.error('Erro ao carregar os certificados:', error)
    );
}

function gerarListaCertificados(certificadosParaExibir) {
  const lista = document.getElementById('certificados-lista');
  lista.innerHTML = '';

  const startIndex = (paginaAtual - 1) * itensPorPagina;
  const endIndex = startIndex + itensPorPagina;

  const certificadosPagina = certificadosParaExibir.slice(startIndex, endIndex);

  certificadosPagina.forEach((certificado) => {
    const li = document.createElement('li');
    li.className = 'principal__lista__linha';

    const link = document.createElement('a');
    link.href = certificado.url;
    link.className = 'principal__lista__link';

    const img = document.createElement('img');
    img.src = certificado.image;
    img.alt = certificado.titulo;
    img.className = 'principal__lista__imagem';

    const titulo = document.createElement('span');
    titulo.className = 'invisivel';
    titulo.textContent = certificado.titulo;

    link.appendChild(img);
    link.appendChild(titulo);
    li.appendChild(link);

    lista.appendChild(li);
  });

  gerarPaginacao(certificadosParaExibir, paginaAtual);
}

function gerarPaginacao(certificadosParaExibir, paginaAtual) {
  const totalPaginas = Math.ceil(
    certificadosParaExibir.length / itensPorPagina
  );
  const paginationContainer = document.getElementById('paginacao');
  paginationContainer.innerHTML = ''; // Limpa a paginação existente

  if (paginaAtual > 1) {
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Anterior';
    prevButton.addEventListener('click', () => mudarPagina(paginaAtual - 1));
    paginationContainer.appendChild(prevButton);
  }

  for (let i = 1; i <= totalPaginas; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.className = i === paginaAtual ? 'active' : '';
    button.addEventListener('click', () => mudarPagina(i));
    paginationContainer.appendChild(button);
  }

  if (paginaAtual < totalPaginas) {
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Próxima';
    nextButton.addEventListener('click', () => mudarPagina(paginaAtual + 1));
    paginationContainer.appendChild(nextButton);
  }
}

function mudarPagina(novaPagina) {
  paginaAtual = novaPagina;
  gerarListaCertificados(certificadosFiltrados);
}

function filtrarCertificados() {
  const termoBusca = document.getElementById('pesquisar').value.toLowerCase();

  certificadosFiltrados = certificados.filter((certificado) =>
    certificado.titulo.toLowerCase().includes(termoBusca)
  );

  if (!termoBusca) {
    certificadosFiltrados = certificados;
  }

  paginaAtual = 1;
  gerarListaCertificados(certificadosFiltrados);
}

function configurarBotaoPesquisa() {
  const botaoPesquisa = document.querySelector('.pesquisar__botao');

  botaoPesquisa.addEventListener('click', filtrarCertificados);
}

document
  .getElementById('pesquisar')
  .addEventListener('input', filtrarCertificados);

carregarCertificados();
