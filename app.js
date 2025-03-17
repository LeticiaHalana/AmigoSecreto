let listaDeAmigos = [];
let buttonAdd = document.querySelector(".button-add");

function adicionarAmigo() {
  let nomeAmigo = document.querySelector(".input-name").value;

  if (nomeAmigo === "") {
    alert("Por favor, insira um nome.");
  } else {
    listaDeAmigos.push(nomeAmigo);
    document.querySelector(".input-name").value = "";
  }

  console.log(listaDeAmigos);
}
