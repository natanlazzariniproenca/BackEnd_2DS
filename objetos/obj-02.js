//A partir do objeto de exemplo crie:
//Um objeto com o tema a sua escolha
//Deve possuir no mínimo 6 propriedades
//Imprima de um jeito amigavel:;
//Ex.: console.log("Cor do Veículo: " + carro.cor)

const carro = {
    marca: "Chevy Corvette",
    modelo: "C7 ZR1",
    hp: 755,
    litragem: 6.2,
    cilindros: 8,
    ano: 2018
}
console.log("Corvette é uma submarca da Chevrolet, por isso: " + carro.marca)
console.log("O modelo ZR1 é o modelo mais potente do modelo C7, seguido pelo Z06: " + carro.modelo)
console.log("hp significa Horse Power, a tradução seria cavalos: " + carro.hp)
console.log("A litragem é um sistema de medidas usado pelo motor, quanto maior, mais potente é o carro: " + carro.litragem)
console.log("Os cilindros são responsáveis por maiores rpms, são encontrados no cabeçote do motor: " + carro.cilindros)
console.log("O ano que esse modelo do carro foi fabricado: " + carro.ano)