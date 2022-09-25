const http = require('http')
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('sending data to the  server')
  }
 else if (req.url === '/home') {
    res.end('sending data to the home  server')
  }y
})
server.listen(3000, 'localhost', () => {
  console.log('server is listing on localhost 3000')
})
