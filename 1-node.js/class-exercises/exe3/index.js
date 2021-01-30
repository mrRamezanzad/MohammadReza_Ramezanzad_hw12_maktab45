const server = require("http").createServer(app),
    host = 'localhost',
    port = 80,
    routes = ["/", "/admin", "/user", "/profile"]


server.listen(port, host, () => {
    console.log(`Server started at: http://${host}:${port}/
    go to routes below:`)
    console.table(routes.map(el => "http://" + host + el))
})

function app(req, res) {
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200)
        res.write("root")
        res.end()
    }
    require("./router/user.js")(req, res)
    if (check404(req.url)) {
        res.writeHead(404)
        res.write("404")
        res.end()
    }
}

function check404(url) {

    if (routes.some(el => el === url)) {
        return false
    }
    return true
}