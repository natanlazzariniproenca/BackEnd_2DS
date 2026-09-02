// importação moderna com (import)
import express from 'express';

const app = express()  //Instanciar o "express"

app.get('/', (req, res) => {
  res.send(`<h3>Página Inicial</h3>\n
    <p>Loja especializada em roupas</p>`)
})

app.get('/roupas', (req, res) => {
  res.send('Minha roupa de sair...!')
})

app.listen(3000, () => {
  console.log('Servidor está ativo!')
})