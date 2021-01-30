const server = require("http"),
    path = require("path"),
    fs = require("fs")

server.createServer(function (req, res) {
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200)
        res.end("Hello World\n")
    } else if (req.method === "GET" && req.url === "/about") {
        fs.readFile(path.join(__dirname, "about.json"), (err, file) => {
            if (err) console.log(err);
            res.writeHead(200, {
                "Content-Type": "application/json"
            })
            res.write(file)
            res.end()
        })
    } else {
        res.writeHead(404)
        res.end("<h1>404 NOT FOUND</h1>")

    }
}).listen(80)

console.log("Server started at: http://localhost/")