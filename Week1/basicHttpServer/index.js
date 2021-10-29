const http = require("http");

const port = 5000;

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-Type": "text/html" });
    res.write("<h2>Welcome to  Main Page</h2>");
  } else if (url === "/about") {
    res.writeHead(200, { "content-Type": "text/html" });
    res.write("<h2>Welcome to the About Page</h1>");
  } else if (url === "/contact") {
    res.writeHead(200, { "content-Type": "text/html" });
    res.write("<h2>Welcome to the Contact Page</h2>");
  } else {
    res.writeHead(404, { "content-Type": "text/html" });
    res.write("<h2>404 there is no such a page</h2>");
  }
  res.end();
});

server.listen(port, () => {
  console.log(`Sunucu Port ${port}'de başlatıldu.`);
});
