// importação moderna com (import)
import express from 'express';

const app = express()

app.get('/', (req, res) => {
  res.send('Home')
})

app.listen(3000, () => {
  console.log('Servidor está vivo!')
})