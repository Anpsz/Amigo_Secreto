// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo !== "") {
        amigos.push(nomeAmigo);
        inputAmigo.value = ""; // Limpa o campo de entrada
        atualizarListaAmigos();
    } else {
        alert("Por favor, digite um nome válido.");
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((amigo, index) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(itemLista);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpa o resultado anterior

    // Embaralha a lista de amigos
    const amigosEmbaralhados = amigos.slice().sort(() => Math.random() - 0.5);

    // Exibe o resultado do sorteio
    const itemResultado = document.createElement('li');
    itemResultado.textContent = `O amigo secreto de ${amigosEmbaralhados[0]} é ${amigosEmbaralhados[1]}.`;
    resultado.appendChild(itemResultado);
}