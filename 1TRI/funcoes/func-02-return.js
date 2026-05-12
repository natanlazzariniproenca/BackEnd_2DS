//funções com retorno exigem a palavra reservada return para retornar um valor
//podemos retornar usando templates literais

const nomeProduto = 'Camiseta';
const precoProduto = 29.99;

function dadosProduto() {
    return `Produto: $(nomeProduto) por apenas R$${precoProduto}.`
}
const produtofinal = dadosProduto()
