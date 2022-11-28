const http = require('http') // load the http moduel 
const { type } = require('os')

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    })
})