let listaDeAmigos = [];
let buttonAdd = document.querySelector(".button-add");
let desabilitarBotao = document.getElementById("reiniciar");

desabilitarBotao.disabled = true;
desabilitarBotao.classList.add("button-desabled");
desabilitarBotao.classList.remove("button-draw");

function adicionarAmigo() {
  let nomeAmigo = document.querySelector(".input-name").value;

  if (nomeAmigo === "") {
    alert("Por favor, insira um nome.");
  } else if (listaDeAmigos.includes(nomeAmigo)) {
    alert("Este nome já foi adicionado.");
    document.querySelector(".input-name").value = "";
  } else {
    listaDeAmigos.push(nomeAmigo);
    atualizarListaDeAmigos();
    document.querySelector(".input-name").value = "";
  }
}

function atualizarListaDeAmigos() {
  let renderListaDeAmigos = document.getElementById("listaAmigos");
  renderListaDeAmigos.innerHTML = "";

  for (let i = 0; i < listaDeAmigos.length; i++) {
    let list = document.createElement("li");
    list.innerHTML = listaDeAmigos[i];
    renderListaDeAmigos.appendChild(list);
  }
}

function sortearAmigo() {
  if (listaDeAmigos.length !== 0 && listaDeAmigos.length > 1) {
    let sorteado =
      listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `O(A) amigo(a) sorteado(a) é: ${sorteado}!🎉 `;
    desabilitarBotao.disabled = false;
    desabilitarBotao.classList.add("button-draw");
    desabilitarBotao.classList.remove("button-desabled");
    desabilitarBotao.style.display = "flex";
    desabilitarBotao.style.justifyContent = "center";
  } else if (listaDeAmigos.length < 2) {
    alert("Por favor, adicione mais amigos para sortear.");
  }
}

function reiniciarSorteio() {
  let resultado = document.getElementById("resultado");
  resultado.textContent = "";
  listaDeAmigos = [];
  desabilitarBotao.disabled = true;
  desabilitarBotao.classList.add("button-desabled");
  desabilitarBotao.classList.remove("button-draw");
  atualizarListaDeAmigos();
  alert("Novo sorteio!");
}
