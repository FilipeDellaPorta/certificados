const certificados = [
    {
        titulo: "Lógica de programação: comece em lógica com o jogo Pong e JavaScript",
        url: "https://cursos.alura.com.br/certificate/281a3d1c-bde4-4815-a01e-0f985d26b0f9?lang=pt_BR"
    },
    {
        titulo: "Lógica de programação: laços e listas com JavaScript",
        url: "https://cursos.alura.com.br/certificate/7fd5bdb1-555e-418f-8885-53dba06a44b2?lang=pt_BR"
    },
    {
        titulo: "Arquitetura de computadores: por trás de como seu programa funciona",
        url: "https://cursos.alura.com.br/certificate/06cdebc7-bd33-472c-ab23-4883c89b17cb?lang=pt_BR"
    },
    {
        titulo: "Linux I: conhecendo e utilizando o terminal",
        url: "https://cursos.alura.com.br/certificate/5b1523af-3290-41d1-974c-c798d33fb9bb?lang=pt_BR"
    },
    {
        titulo: "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags",
        url: "https://cursos.alura.com.br/certificate/67c60518-c87f-4b8d-b475-00edca3fc495?lang=pt_BR"
    },
    {
        titulo: "HTML e CSS: Classes, posicionamento e Flexbox",
        url: "https://cursos.alura.com.br/certificate/c47ed570-810b-435b-b7e8-2a5be928071c?lang=pt_BR"
    },
    {
        titulo: "HTML e CSS: cabeçalho, footer e variáveis CSS",
        url: "https://cursos.alura.com.br/certificate/20505ef8-7f51-4231-9b85-e1eb62c8631f?lang=pt_BR"
    },
    {
        titulo: "HTML e CSS: trabalhando com responsividade e publicação de projetos",
        url: "https://cursos.alura.com.br/certificate/6970c342-e4a7-48ca-9fef-f49c56c51bdf?lang=pt_BR"
    },
    {
        titulo: "JavaScript para Web: Crie páginas dinâmicas",
        url: "https://cursos.alura.com.br/certificate/b55803b9-05d9-42e1-8b08-cc5e5b87f669?lang=pt_BR"
    },
    {
        titulo: "Git e GitHub: repositório, commit e versões",
        url: "https://cursos.alura.com.br/certificate/d0340eb2-6381-4c29-bbd1-0d19f5f94916?lang=pt_BR"
    },
    {
        titulo: "Lógica de programação: mergulhe em programação com JavaScript",
        url: "https://cursos.alura.com.br/certificate/68f6bf52-00f6-4e08-a24b-d66bd5205128?lang=pt_BR"
    },
    {
        titulo: "Git e GitHub: compartilhando e colaborando em projetos",
        url: "https://cursos.alura.com.br/certificate/a1ea8716-d8ed-4940-9aee-77553eab0c02?lang=pt_BR"
    },
    {
        titulo: "Lógica de programação: explore funções e listas",
        url: "https://cursos.alura.com.br/certificate/139b4ad6-36ed-4844-8f63-843f8d6cc84b?lang=pt_BR"
    },
    {
        titulo: "Lógica de programação: praticando com desafios",
        url: "https://cursos.alura.com.br/certificate/f19b6633-25f5-458d-8045-e5cb0438ec71?lang=pt_BR"
    },
    {
        titulo: "JavaScript e HTML: desenvolva um jogo e pratique lógica de programação",
        url: "https://cursos.alura.com.br/certificate/916a86c0-5ab6-4513-8cad-b25776586424?lang=pt_BR"
    },
    {
        titulo: "Figma: conhecendo a ferramenta",
        url: "https://cursos.alura.com.br/certificate/e694650c-ca6a-4438-b501-de29dc7ac85c?lang=pt_BR"
    },
    {
        titulo: "Figma: componentes, auto layout e máscaras",
        url: "https://cursos.alura.com.br/certificate/4174d3a2-1b92-4224-891e-a81e87eae9a6?lang=pt_BR"
    },
    {
        titulo: "JavaScript: manipulando elementos no DOM",
        url: "https://cursos.alura.com.br/certificate/614b249b-afd9-432a-9bd4-fbb8175a0281?lang=pt_BR"
    },
    {
        titulo: "JavaScript: explorando a manipulação de elementos e da localStorage",
        url: "https://cursos.alura.com.br/certificate/a5e8b4a0-a7fe-44a1-b4fa-1acba18d7a59?lang=pt_BR"
    },
    {
        titulo: "JavaScript: validações e reconhecimento de voz",
        url: "https://cursos.alura.com.br/certificate/5f849770-69e6-435e-89dd-fc702a751051?lang=pt_BR"
    },
    {
        titulo: "HTML e CSS: praticando HTML/CSS",
        url: "https://cursos.alura.com.br/certificate/d5df8d5d-fc1d-49fa-8580-7890d479fc2d?lang=pt_BR"
    },
    {
        titulo: "HTML e CSS: responsividade com mobile-first",
        url: "https://cursos.alura.com.br/certificate/eb60ed7d-aca5-4216-bc66-51705166b272?lang=pt_BR"
    },
    {
        titulo: "JavaScript: métodos de array",
        url: "https://cursos.alura.com.br/certificate/30e7cfbb-00ba-4c53-8a73-759d9e025143?lang=pt_BR"
    },
    {
        titulo: "JavaScript: criando requisições",
        url: "https://cursos.alura.com.br/certificate/1e2068fb-01ca-4150-9e86-aab4e6ec0e88?lang=pt_BR"
    },
    {
        titulo: "JavaScript: validando formulários",
        url: "https://cursos.alura.com.br/certificate/e83ffbd7-54db-4652-a5a8-8b10a97bafcd?lang=pt_BR"
    },
    {
        titulo: "JavaScript: consumindo e tratando dados de uma API",
        url: "https://cursos.alura.com.br/certificate/b37130f6-00d2-4f0e-8f57-3109ebeb99ca?lang=pt_BR"
    },
    {
        titulo: "JavaScript: utilizando tipos, variáveis e funções",
        url: "https://cursos.alura.com.br/certificate/f0ec3e10-8750-418a-9feb-a479fb7a296e?lang=pt_BR"
    },
    {
        titulo: "JavaScript: conhecendo arrays",
        url: "https://cursos.alura.com.br/certificate/e1ed777d-719a-48ee-90bd-8ad95e07f8c9?lang=pt_BR"
    },
    {
        titulo: "JavaScript: conhecendo objetos",
        url: "https://cursos.alura.com.br/certificate/0f902e09-c3aa-4c21-a0c0-8c25b223fb2d?lang=pt_BR"
    },
    {
        titulo: "JavaScript com Node.js: criando sua primeira biblioteca",
        url: "https://cursos.alura.com.br/certificate/efd75134-b3ce-4fec-a25b-8f0100218862?lang=pt_BR"
    },
    {
        titulo: "JavaScript: programação Orientada a Objetos",
        url: "https://cursos.alura.com.br/certificate/01c09427-c1c1-4fbb-8a9b-781334b308a8?lang=pt_BR"
    },
    {
        titulo: "Terminal: aprenda comandos para executar tarefas",
        url: "https://cursos.alura.com.br/certificate/957942f9-f0ad-43a5-bf4b-37805fb8e4b6?lang=pt_BR"
    },
    {
        titulo: "Praticando CSS: Grid e Flexbox",
        url: "https://cursos.alura.com.br/certificate/5bc29115-2967-4dfc-9ce4-8679c9e8b45e?lang=pt_BR"
    },
    {
        titulo: "HTTP: entendendo a web por baixo dos panos",
        url: "https://cursos.alura.com.br/certificate/8b9fbe79-fcbe-41b8-b1fb-66b1531f24a5?lang=pt_BR"
    }
]

// Função para gerar a lista de certificados

function gerarListaCertificados() {
    const lista = document.getElementById('certificados-lista')

    certificados.forEach(certificado => {
        const li = document.createElement('li')
        li.className = 'principal__lista__linha'
        li.innerHTML = `${certificado.titulo} <a class="principal__lista__link" href="${certificado.url}">certificado</a>`
        lista.appendChild(li)
    })
}

// Chama a função para gerar a lista quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', gerarListaCertificados)
