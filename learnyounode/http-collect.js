'use strict'

const http = require('http')
const path = process.argv[2]
const bl = require('bl') // Buffer List

http.get(path, response => {
  response.pipe(bl((err, data) => {
    if (err) console.error(err)

    console.log(data.length)
    console.log(data.toString())
  }))
}).on('error', console.error)