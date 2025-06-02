/*
  Exportação padrão (default):
  function imprimir(json) {
    // ...
  }
  export default imprimir;

  A função é exportada como exportação padrão (default export).
  Pode ser importada com qualquer nome:
  import qualquerNome from './imprimir.js';

  Só pode haver uma exportação default por arquivo.
*/
function imprimir(json){
  return `<li>
            <div class="id">ID: ${json.id}</div> 
            <div class="nome">Nome: ${json.produto}</div> 
            <div class="nascimento">Nascimento: ${json.preco}</div>
          </li>`;
}

export default imprimir;
