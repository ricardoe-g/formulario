function alterarFundo() {
    document.body.classList.toggle("dark");
}
const meuFormulario = document.getElementById('meuFormulario');
const colecao = document.getElementById('colecao');

meuFormulario.addEventListener('submit', function(evento){
	evento.preventDefault();

	
	const novoTitulo = document.getElementById('titulo').value;
	const novaImagem = document.getElementById('link').value;
	const novoTexto = document.getElementById('descricao').value;

	const novo = {
		titulo: novoTitulo,
		imagem: novaImagem,
		texto: novoTexto
	};

	
	const card = `
		<div class="card">
			<img src="${novo.imagem}">
			<h3>${novo.titulo}</h3>
			<p>${novo.texto}</p>
		</div>
	`;

	
	colecao.innerHTML += card;

	
	meuFormulario.reset();
});
