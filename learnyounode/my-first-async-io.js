'use strict'

const fs = require('fs')

const path = process.argv[2]

fs.readFile(path, 'utf8', (error, data) => {
  if (error) throw error
  const lineas = data.split('\n')
  console.log(lineas.length - 1)
})
