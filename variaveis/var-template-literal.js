//templates literais permitem:
//criar um texto interpolado, ou seja, com variáveis dentro do texto
//e placeholders, ou seja, expressões dentro do texto

const nome = 'Natan';
const listaDesejos = ['Seguir a Cristo', 'Shape', 'Carro']
//ex 01 sem template
const meuPerfil = 'Olá ' + nome + ' seus desejos são: ' +listaDesejos
//ex 02 com template
const meuPerfil2 = `Olá, ${nome}! Seus desejos são: ${listaDesejos}.`



console.log(meuPerfil)
console.log(meuPerfil2)