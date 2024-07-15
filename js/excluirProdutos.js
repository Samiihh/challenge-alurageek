import { conectaApi } from "./script.js";
import constroiCard from "./exibirProdutos.js";

async function excluirProduto(evento) {
  
  const id = document.querySelector('[data-id="${id}"]');
  const exclusao = await conectaApi.excluiProduto(id);
  card.remove();

  console.log(exclusao);
  
  const lista = document.querySelector('[data-produtos]');

  lista.forEach(elemento => lista.appendChild(
    constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

  while (lista.firstChild == id) {
    lista.removeChild();
  }

  exclusao.forEach(elemento => lista.removeChild());

  lista.splash[pos, id];
  
  listarProdutos();
  return card;
  
}

const lixeira = document.querySelector('[data-lixeira]');
console.log(lixeira);
lixeira.addEventListener('click', evento => excluirProduto(evento));
