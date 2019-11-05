'use strict'

const fs = require('fs')
const path = require('path')

module.exports = function (dirname, ext, handleError) {
  fs.readdir(dirname, (error, data) => {
    if (error) return handleError(error)
    
    const list = []
    for (let i=0 ; i<data.length ; i++) {
      if ('.' + ext == path.extname(data[i])) {
        list.push(data[i])
      }
    }
    return handleError(null, list)
  })
}
