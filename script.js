class Galeria {
  constructor() {
    this.galeria = [];
    this.colecao = document.getElementById("colecao");
    this.formulario = document.getElementById("meuFormulario");

    this.formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();
      this.adicionar();
    });
  }

  adicionar() {
    const novo = {
      titulo: document.getElementById("titulo").value,
      imagem: document.getElementById("link").value,
      texto: document.getElementById("descricao").value
    };

    this.galeria.push(novo);
    this.mostrar();
    this.formulario.reset();
  }

  mostrar() {
    this.colecao.innerHTML = "";

    this.galeria.forEach(item => {
      this.colecao.innerHTML += `
        <div class="card">
          <div class="letras">
            <h3>${item.titulo}</h3>
            <p>${item.texto}</p>
          </div>

          <div class="img">
            <img src="${item.imagem}" alt="${item.titulo}">
          </div>
        </div>
      `;
    });
  }
}

function alterarFundo() {
  document.body.classList.toggle("dark");
}

var galeria = new Galeria();
