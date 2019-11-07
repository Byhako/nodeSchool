'use strict'

const http = require('http')
const bl = require('bl') // Buffer List
const path1 = process.argv[2]
const path2 = process.argv[3]
const path3 = process.argv[4]

http.get(path1, response1 => {
  response1.pipe(bl((err1, data1) => {
    if (err1) console.error(err1)
    console.log(data1.toString())

    http.get(path2, response2 => {
      response2.pipe(bl((err2, data2) => {
        if (err2) console.error(err2)
        console.log(data2.toString())

        http.get(path3, response3 => {
          response3.pipe(bl((err3, data3) => {
            if (err3) console.error(err3)
            console.log(data3.toString())
          }))
        }).on('error', console.error)
      }))
    }).on('error', console.error)
  }))
}).on('error', console.error)