require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const puerto = process.env.PUERTO || 3002

const app = express()



app.listen(puerto, ()=> {
  console.log(`Servidor conectado en el puerto: ${puerto}`)
})