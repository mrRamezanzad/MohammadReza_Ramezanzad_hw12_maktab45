const server = require("http"),
    path = require("path"),
    fs = require("fs")

server.createServer(function (req, res) {

    if (req.method === "GET" && req.url === "/") {
        fs.readFile(path.join(__dirname, ("views/index.html")), "utf-8", (err, page) => {
            if (err) console.log(err)

            res.writeHead(200, {
                "Content-Type": "text/html"
            })
            res.end(page)
        })

    } else {

        res.writeHead(404)
        res.end("<h1>404 NOT FOUND</h1>")

    }
}).listen(80)

console.log("Server started at: http://localhost/")