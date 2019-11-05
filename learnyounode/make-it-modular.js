'use strict'

const mymodule = require('./mymodule')

const ruta = process.argv[2]
const ext = process.argv[3]

function handleError(error, data) {
  if (error) throw error
  data.forEach(element => {
    console.log(element)
  });
}

mymodule(ruta, ext, handleError)
