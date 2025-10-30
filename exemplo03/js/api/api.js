const replit = "https://6a0f147d-da74-4ae1-b8ca-7a7828542734-00-h6nwxazwm4tw.worf.replit.dev:3000/";
const url = replit + "produtos";

/*
  Exportação nomeada:
  export async function enviar(dados) {
    // ...
  }

  Exportar a função enviar() com um nome explícito.
  Essa função deve ser importada usando exatamente esse nome:
  import { enviar } from "./api/api.js";
  As chaves {} são obrigatórias em exportações nomeadas.
  Pode haver várias exportações nomeadas em um mesmo arquivo.
*/
export async function enviar(dados) {
  try {
    const resposta = await fetch(url, {
      method: 'POST',
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(dados),
    });

    if (!resposta.ok) {
      throw new Error('Erro no envio dos dados!');
    }

    return await resposta.json();
  } catch (erro) {
    console.error('Erro ao enviar dados:', erro);
    throw erro;
  }
}

/*
  Exportação nomeada:
  export async function buscar() {
    // ...
  }

  Exportação da função buscar() com um nome explícito.
  Essa função deve ser importada usando exatamente esse nome:
  import { buscar } from "./api/api.js";
  As chaves {} são obrigatórias em exportações nomeadas.
  Pode haver várias exportações nomeadas em um mesmo arquivo.
*/
export async function buscar() {
  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error('Erro no envio dos dados!');
    }

    return await resposta.json();
  } catch (erro) {
    console.error('Erro ao ler dados:', erro);
    throw erro;
  }
}
