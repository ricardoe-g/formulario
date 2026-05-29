function alterarFundo() {
    document.body.classList.toggle("dark");
}

const meuFormulario = document.getElementById('meuFormulario');
const colecao = document.getElementById('colecao');

let galeria = JSON.parse(localStorage.getItem('galeria')) || [];

function salvar() {
    localStorage.setItem('galeria', JSON.stringify(galeria));
}

function renderizarGaleria() {
    colecao.innerHTML = galeria.map(item => `
        <div class="card">
            <div class="letras">
                <h3>${item.titulo}</h3>
                <p>${item.texto}</p>
            </div>
            <div class="img">
                <img src="${item.imagem}" alt="${item.titulo}">
            </div>
        </div>
    `).join('');
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
    salvar();
    renderizarGaleria();
    meuFormulario.reset();
});
