let listaDeAmigos = [];
let buttonAdd = document.querySelector(".button-add");

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
