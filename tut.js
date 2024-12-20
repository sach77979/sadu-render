
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  res.end('Hello, its me sadu!');
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
