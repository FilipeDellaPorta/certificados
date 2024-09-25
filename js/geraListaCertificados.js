import certificados from "./listaCertificadosCards.js";

function gerarListaCertificados() {
  certificados.forEach((certificado) => {
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

    const lista = document.getElementById("certificados-lista"); // Seleciona o elemento da lista no DOM
    lista.appendChild(li); // Adiciona o item da lista ao <ul> ou <ol>
  });
}

// Chama a função para gerar a lista quando o documento estiver carregado
document.addEventListener("DOMContentLoaded", gerarListaCertificados);
