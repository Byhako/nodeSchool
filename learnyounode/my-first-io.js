'use strict'

const fs = require('fs')

const path = process.argv

// const file = fs.readFileSync(path[2]).toString()
const file = fs.readFileSync(path[2], 'utf8')

const lineas = file.split('\n')

console.log(lineas.length - 1)
