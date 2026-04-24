function alterarFundo() {
    document.body.classList.toggle("dark");
}
const meuFormulario = document.getElementByID('meuFormulario');
formulario.addEventListener('submit', function(evento){
	event.preventDefault();
	const.novoTitulo = document.getElementById('titulo').value;
	const.novaImagem = document.getElementById('link').value;
	const.novoTexto = document.getElementById('descricao').value;

	const novo = {
		titulo: novoTitulo,
		imagem: novaImagem,
		texto: novoTexto
	};
})
