const server = require("http"),
    path = require("path"),
    fs = require("fs"),
    public = require("./routes/public.js"),
    publicPath = __dirname,
    routes = ["/",
        "/public/css/bootstrap.css",
        "/public/css/1-reqres-users.css",
        "/public/js/jquery.min.js",
        "/public/js/bootstrap.js",
        "/public/js/1-reqres-users.js",
        "/public/assets/user1.jpg",
        "/public/assets/user2.jpg",
        "/public/assets/user3.jpg",
        "/public/assets/user4.jpg",
        "/public/assets/user5.jpg",
        "/public/assets/user6.jpg",
        "/public/assets/user7.png",
    ]

server.createServer(function (req, res) {

    if (req.method === "GET" && req.url === "/") {

        fs.readFile(path.join(__dirname, ("views/1-reqres-users.html")), "utf-8", (err, page) => {

            if (err) console.log(err)
            res.writeHead(200, {})
            res.end(page)
        })
    }

    // using public files
    public(req, res, publicPath, routes)

    if (check404(req.url)) {
        res.writeHead(404)
        res.write("<h1>404 Page Not Found</h1>")
        res.end()
    }

}).listen(80, () => {
    console.log("Server started at: http://localhost/")
})


function check404(url) {
    return routes.some(el => el === url) ? false : true
}