import { enviar, buscar } from "./api/api.js";
import lerDadosDoFormulario from "./ler.js";
import imprimirDadosDaLista from "./imprimir.js";

const produto = document.getElementById("produto");
const botao = document.getElementById("botaoEnviar");

botao. addEventListener("click", () => adicionar());

function adicionar() {
    const dados = lerDadosDoFormulario();
    if (dados) {
        enviar(dados);
        let vetor = buscar();
        atualizarLista(vetor);
    } else alert("dados não enviados: " + dados)
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

produto.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adicionarElemento();
    }
});

produto.onkeyup = function () {
    var termo = produto.value.toLowerCase();
    var itens = document.getElementsByClassName("nome");

    for (var i = 0; i < itens.length; i++) {
        var item = itens[i].innerHTML;

        if (item.toLowerCase().includes(termo))
            itens[i].style.display = "list-item";
        else
            itens[i].style.display = "none";
    }
};
