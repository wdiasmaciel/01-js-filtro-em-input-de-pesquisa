/*
  Exportação padrão (default):
  function ler() {
    // ...
  }
  export default ler;

  A função é exportada como exportação padrão (export default).
  Pode ser importada com qualquer nome:
  import qualquerNome from './ler.js';

  Só pode haver uma exportação default por arquivo.
*/

function ler() {
    const nome = document.getElementById('nome').value.trim();
    const quantidade = document.getElementById('quantidade').value.trim();
    const preco = document.getElementById('preco').value.trim();

    document.getElementById('nome').value = "";
    document.getElementById('quantidade').value = "";
    document.getElementById('preco').value = "";

    if (nome && quantidade && preco)
      return { nome, quantidade, preco };
    
    return null;
}

export default ler;

