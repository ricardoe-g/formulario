class Galeria {
  constructor() {
    console.log("Galeria iniciou!");

    this.galeria = [];
    this.colecao = document.getElementById("colecao");
    this.formulario = document.getElementById("meuFormulario");

    this.formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();

      console.log("Botão Adicionar foi clicado!");

      this.adicionar();
    });
  }

  adicionar() {
    const novo = {
      titulo: document.getElementById("titulo").value,
      imagem: document.getElementById("link").value,
      texto: document.getElementById("descricao").value
    };

    console.log("Novo item:", novo);

    this.galeria.push(novo);

    this.mostrar();

    this.formulario.reset();
  }

  mostrar() {
    console.log("Mostrando itens...");

    this.colecao.innerHTML = "";

    this.galeria.forEach((item) => {
      this.colecao.innerHTML += `
        <div class="card">
          <h3>${item.titulo}</h3>

          <img src="${item.imagem}" alt="${item.titulo}">

          <p>${item.texto}</p>
        </div>
      `;
    });
  }
}

function alterarFundo() {
  document.body.classList.toggle("dark");
}

const galeria = new Galeria();
