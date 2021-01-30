const server = require("http"),
    fs = require("fs")

server.createServer(function (req, res) {


    if (req.method === "GET" && req.url === "/") {
        fs.readFile("./views/index.html", "utf-8", (err, page) => {

            res.setHeader("Content-Type", "text/html")
            res.writeHead(200)
            res.write(page)
            res.end()
        })
    } else if (req.method === "GET" && req.url === "/dist/style.css") {

        fs.readFile("./public/dist/style.css", "utf-8", (err, file) => {

            res.setHeader("Content-Type", "text/css")
            res.writeHead(200)
            res.write(file)
            res.end()
        })
    } else if (req.method === "GET" && req.url === "/assets/image.jpg") {

        fs.readFile("./public/assets/image.jpg", (err, file) => {

            res.setHeader("Content-Type", "file/image")
            res.writeHead(200)
            res.write(file)
            res.end()
        })
    } else if (req.method === "GET" && req.url === "/dist/main.js") {

        fs.readFile("./public/dist/main.js", (err, file) => {

            res.writeHead(200)
            res.write(file)
            res.end()
        })
    } else {
        fs.readFile("./views/404.html", (err, page) => {

            res.writeHead(404)
            res.write(page)
            res.end()
        })


    }

}).listen(80)

console.log("Server started at: http://localhost/")