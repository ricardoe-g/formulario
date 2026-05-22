function alterarFundo() {
    document.body.classList.toggle("dark");
}
const meuFormulario = document.getElementById('meuFormulario');
const colecao = document.getElementById('colecao');

function renderizarCards(animais) {

    const novoCard = `
    <div class="card">

        <div class="letras">
            <h3 id="titulo">${animais.titulo}</h3>
            <p>${animais.texto}</p>
        </div>

        <div class="img">
            <img src="${animais.imagem}" alt="${animais.descricaoIm}">
        </div>

    </div>
    `;

    return novoCard;
}

meuFormulario.addEventListener('submit', function(evento){

    evento.preventDefault();

    // CAPTURAR
    const novoTitulo = document.getElementById('titulo').value;
    const novaImagem = document.getElementById('link').value;
    const novoTexto = document.getElementById('descricao').value;

    // OBJETO
    const novo = {
        titulo: novoTitulo,
        imagem: novaImagem,
        texto: novoTexto,
        descricaoIm: novoTitulo
    };

    // CHAMAR FUNÇÃO
    renderizarCards(novo);

    // EXIBIR
    colecao.innerHTML += card;

    // LIMPAR
    meuFormulario.reset();
});
