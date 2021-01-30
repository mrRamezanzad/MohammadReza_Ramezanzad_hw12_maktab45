module.exports = function (req, res, isLoggedIn) {
    const fs = require("fs"),
        path = require("path")

    if (req.method === "GET" && req.url === "/login") {
        fs.readFile(path.join(__dirname, "..", "/views/login.html"), "utf8", (err, page) => {
            if (err) console.log(err)
            res.writeHead(200)
            res.write(page)
            res.end()
        })
    }

    if (req.method === "GET" && req.url === "/panel" || req.url === "/profile") {

        if (isLoggedIn) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            })
            res.end("logged in ")

        } else {
            res.writeHead(302, {
                "Location": "/login"
            })
            res.end()
        }
    }
}