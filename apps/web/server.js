import http from 'node:http';
import fs from 'node:fs';

const server = http.createServer((req, res) => {
  // Enable CORS for all routes and methods
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // Handle preflight requests
    res.writeHead(200);
    res.end();
    return;
  }
  // Handle requests for the '/code' endpoint
  console.log(req.url, req.method);
  if (req.url === '/code' && req.method === 'POST') {
    let code = '';

    // Collect the request body data
    req.on('data', (chunk) => {
      code += chunk.toString();
    });

    req.on('end', () => {
      if (!fs.existsSync('./src/rendition')) {
        fs.mkdirSync('./src/rendition');
      }
      fs.writeFileSync('./src/rendition/Preview.tsx', code);

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Success');
    });
  } else {
    // Handle other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 6543;

// Start the server
server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
