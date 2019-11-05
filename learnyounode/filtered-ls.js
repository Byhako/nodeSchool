'use strict'

const fs = require('fs')
const path = require('path')

const ruta = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(ruta, (error, data) => {
  if (error) throw error

  for (let i=0 ; i<data.length ; i++) {
    if (ext == path.extname(data[i])) {
      console.log(data[i])
    }
  }
})
