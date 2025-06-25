const http = require("http");
const PORT = 4000;

//REST API
// http or https protocol
// different content-type e.g json, binary, pdf
// always bi directional (request, response)

//TODO: READ http methods and status code
const server = http.createServer((req, res) => {
  if (req.url === "/gethello" && req.method === "GET") {
    // res.writeHead(200, { "Content-Type": "application/json" });
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
  } else {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Path not implemented");
  }
});

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

//TODO:  IMPROVE API TO GET A REQUEST ON /something and dynamically response using that url
