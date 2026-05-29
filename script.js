function alterarFundo() {
    document.body.classList.toggle("dark");
}

const meuFormulario = document.getElementById('meuFormulario');
const colecao = document.getElementById('colecao');

let galeria = JSON.parse(localStorage.getItem('galeria')) || [];

function renderizarGaleria() {
    colecao.innerHTML = "";
    galeria.forEach(item => {
        colecao.innerHTML += renderizarCards(item);
    });
}

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

renderizarGaleria();

meuFormulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const novo = {
        titulo: document.getElementById('titulo').value,
        imagem: document.getElementById('link').value,
        texto: document.getElementById('descricao').value
    };

    galeria.push(novo);
    localStorage.setItem('galeria', JSON.stringify(galeria));

    renderizarGaleria();
    meuFormulario.reset();
});
