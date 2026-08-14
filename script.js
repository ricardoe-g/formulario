class Galeria {
  constructor() {
    this.galeria = JSON.parse(localStorage.getItem('galeria')) || [];
    this.colecao = document.getElementById('colecao');
    this.formulario = document.getElementById('meuFormulario');
  }

  salvar() {
    localStorage.setItem('galeria', JSON.stringify(this.galeria));
  }

  mostrar() {
    this.colecao.innerHTML = this.galeria.map(item => `
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

  adicionar() {
    this.galeria.push({
      titulo: titulo.value,
      imagem: link.value,
      texto: descricao.value
    });

    this.salvar();
    this.mostrar();
    this.formulario.reset();
  }
}

function alterarFundo() {
  document.body.classList.toggle("dark");
}

var galeria;

function setup() {
  galeria = new Galeria();
  galeria.mostrar();

  galeria.formulario.addEventListener('submit', evento => {
    evento.preventDefault();
    galeria.adicionar();
  });
}
