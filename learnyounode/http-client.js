'use strict'

const http = require('http')

const ruta = process.argv[2]

http.get(ruta, response => {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)
