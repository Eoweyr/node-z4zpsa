require('dotenv');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const puerto = process.env.PUERTO || 3003

const app = express()
app.use('dotenv')


app.listen(puerto, ()=> {
  console.log(`Servidor conectado en el puerto: ${puerto}`)
})