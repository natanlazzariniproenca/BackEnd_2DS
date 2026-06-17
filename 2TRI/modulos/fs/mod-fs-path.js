const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default

try {
//              módulo          diretório      arquivo    codificação
const arquivo = fs.readFileSync(path.join(__dirname, '/festa.md'), 'utf-8')
console.log(chalk.green('Arquivo lido com sucesso!:'))
console.log(arquivo)
} catch (erro) {
    console.log(chalk.red("Sentou na bonceca:"))
    console.log(erro.message)
}