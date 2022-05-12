const Integrante = require('./models/Integrante')
const bcrypt = require('bcryptjs')

const salt = bcrypt.genSaltSync(10)
const hash = bcrypt.hashSync('mulheresnaciencia123', salt)

Integrante.create({
  nome: 'Maria da Silva',
  cpfIntegrante: '12345678909',
  rgIntegrante: '123456789',
  cargoIntegrante: 'Coordenador',
  telefone: '998765432',
  email: 'maria@gmail.com',
  senhaLogin: hash
})
console.log('Integrante criada!')
