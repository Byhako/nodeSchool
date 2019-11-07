'use strict'

const net = require('net')
const strftime = require('strftime')
const port = process.argv[2]

const server = net.createServer(socket => {
  const date = strftime('%F %H:%M', new Date())
  socket.write(date + '\n')
  socket.end()
})
server.listen(port)