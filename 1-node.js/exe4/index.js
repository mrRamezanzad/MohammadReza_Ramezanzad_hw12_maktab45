const server = require("http"),
    path = require("path"),
    fs = require("fs")

server.createServer(function (req, res) {

    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200)
        res.end("Hello Web Application\n")

    } else if (req.method === "GET" && req.url === "/about") {

        res.writeHead(200)
        res.end(`About Me`, console.log(req.url))

    } else if (req.method === "GET" && req.url === "/contact") {

        res.writeHead(200)
        res.end(`Contact us`)

    } else if (req.method === "GET" && req.url === "/products") {

        res.writeHead(200)
        res.end(`Our Products`)

    } else if (req.method === "GET" && req.url === "/customers") {

        res.writeHead(200)
        res.end(`Some of our customers`)

    } else {
        res.writeHead(404)
        res.end("<h1>404 NOT FOUND</h1>")

    }
}).listen(80)

console.log("Server started at: http://localhost/")