const listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    if (nome && listaAmigos.length < 4) {
        listaAmigos.push(nome);
        atualizarLista();
    }
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaAmigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 4) {
        const sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        document.getElementById("resultado").innerHTML = `<li>${sorteado}</li>`;
    }
}
