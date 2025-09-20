var listaAmigos = [];

function adicionarAmigo() {
  var input = document.getElementById("amigo");
  var nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome válido!");
    return;
  }

  listaAmigos.push(nome);
  atualizarLista();

  input.value = "";
  input.focus();
}

function atualizarLista() {
  var ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";

  for (var i = 0; i < listaAmigos.length; i++) {
    var li = document.createElement("li");
    li.textContent = listaAmigos[i];
    ul.appendChild(li);
  }
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("Adicione pelo menos um nome antes de sortear!");
    return;
  }

  var indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
  var amigoSorteado = listaAmigos[indiceSorteado];

  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "<li>🎉 O amigo secreto sorteado é: <strong>" + amigoSorteado + "</strong></li>";
}
