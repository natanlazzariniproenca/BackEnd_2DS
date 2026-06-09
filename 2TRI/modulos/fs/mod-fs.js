
const fs = require('fs')
//              módulo          diretório      arquivo    codificação
const arquivo = fs.readFileSync(__dirname + '/festa.md', 'utf-8')
console.log(arquivo)