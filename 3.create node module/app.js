const http = require("http")
const requestHandler = require('./routes')

console.log(requestHandler.msg)

const server = http.createServer(requestHandler.handler)
server.listen(65535)