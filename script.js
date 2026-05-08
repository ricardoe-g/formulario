function alterarFundo() {
    document.body.classList.toggle("dark");
}
const meuFormulario = document.getElementById('meuFormulario');
const colecao = document.getElementById('colecao');

meuFormulario.addEventListener('submit', function(evento){
	evento.preventDefault();

	// CAPTURAR
	const novoTitulo = document.getElementById('titulo').value;
	const novaImagem = document.getElementById('link').value;
	const novoTexto = document.getElementById('descricao').value;

	const novo = {
		titulo: novoTitulo,
		imagem: novaImagem,
		texto: novoTexto
	};

	// MONTAR
	const card = `
		<div class="card">
			<h3>${novo.titulo}</h3>
			<img src="${novo.imagem}">
			<p>${novo.texto}</p>
		</div>
	`;

	// EXIBIR
	colecao.innerHTML += card;

	// LIMPAR
	meuFormulario.reset();
});
