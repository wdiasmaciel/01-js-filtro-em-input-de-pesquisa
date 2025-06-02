import { enviar, buscar } from "./api/api.js";
import lerDadosDoFormulario from "./ler.js";
import imprimirDadosDaLista from "./imprimir.js";

const produto = document.getElementById("produto");
const preco = document.getElementById("preco");
const botao = document.getElementById("botaoEnviar");

window.addEventListener('DOMContentLoaded', async () => {
    const vetor = await buscar();
    atualizarLista(vetor);
});

botao.addEventListener("click", (event) => {
    event.preventDefault();
    adicionar();
});

botao.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adicionar();
    }
});

async function adicionar() {
    const dados = lerDadosDoFormulario();
    if (dados) {
        await enviar(dados);
        let vetor = await buscar();
        atualizarLista(vetor);
    } else
        alert("Dados não enviados!");
}

function atualizarLista(vetor) {
    const lista = document.getElementById('lista');
    lista.innerHTML = "";

    vetor.forEach(elemento => {
        const li = document.createElement('li');
        li.innerHTML = imprimirDadosDaLista(elemento)
        lista.appendChild(li);
    });
}

produto.onkeyup = () => {
    var termo = produto.value.toLowerCase();
    filtrar(termo)
};

preco.onkeyup = () => {
    var termo = preco.value.toLowerCase();
    filtrar(termo)
};

function filtrar(termo) {
    var itens = document.getElementsByTagName("li");

    for (var i = 0; i < itens.length; i++) {
        var item = itens[i].innerHTML;

        if (item.toLowerCase().includes(termo)){
            itens[i].style.display = "flex";
            itens[i].style.backgroundColor = "rgb(237, 237, 249)";
        }
        else
            itens[i].style.display = "none";
    }
};
