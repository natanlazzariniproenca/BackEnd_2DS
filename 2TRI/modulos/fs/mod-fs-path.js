const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default

try {
//              módulo          diretório      arquivo    codificação
const arquivo = fs.readFileSync(path.join(__dirname, '/festa.mda'), 'utf-8')
console.log(chalk.bgGreen.Bold('Arquivo lido com sucesso!'))
console.log(arquivo)
} catch (erro) {
    console.log(chalk.bgYellowBright.bold("⚠️ Erro ao ler o arquivo!"))
    console.log(chalk.bgRed.bold("Sentou na boneca"))
    console.log(erro.message)
}