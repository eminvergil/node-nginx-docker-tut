const http = require("http");

const defaultPort = 999;
const portNumber = process.env.PORT || defaultPort;

const httpServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end("this is port: " + portNumber);
});

httpServer.listen(portNumber, "0.0.0.0", () => {
  console.log("listening on port ", portNumber);

  console.log(httpServer.address());
});
