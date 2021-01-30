const server = require("http")

server.createServer(function (req, res) {
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200)
        res.end("Hello World\n")
    }
}).listen(80)

console.log("Server started at: http://localhost/")