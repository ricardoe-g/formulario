function alterarFundo() {
    document.body.classList.toggle("dark");
}

const meuFormulario = document.getElementById('meuFormulario');
const colecao = document.getElementById('colecao');

function renderizarCards(animais) {
    return `
    <div class="card">
        <div class="letras">
            <h3>${animais.titulo}</h3>
            <p>${animais.texto}</p>
        </div>

        <div class="img">
            <img src="${animais.imagem}" alt="${animais.titulo}">
        </div>
    </div>
    `;
}

meuFormulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const novoTitulo = document.getElementById('titulo').value;
    const novaImagem = document.getElementById('link').value;
    const novoTexto = document.getElementById('descricao').value;

    const novo = {
        titulo: novoTitulo,
        imagem: novaImagem,
        texto: novoTexto
    };

    const card = renderizarCards(novo);

    colecao.innerHTML += card;

    meuFormulario.reset();
});
