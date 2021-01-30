const server = require("http"),
    path = require("path"),
    fs = require("fs"),
    public = require("./routes/public.js"),
    routes = ["/", "/login", "/profile", "/panel", "/public/css/login.css","/public/assets/background.jpg"]

let isLoggedIn = false

server.createServer(function (req, res) {

    // ============ root page ============
    if (req.method === "GET" && req.url === "/") {


        res.writeHead(302, {
            "Location": "http://localhost/login"
        })
        res.end()

    }

    // using public files
    public(req, res, routes)

    // routing modules
    require("./routes/profile")(req, res, isLoggedIn)

    // ============ not found page ============
    if (check404(req.url)) {
        res.writeHead(404)
        fs.readFile(path.join(__dirname, "views/404.html"), (err, page) => {
            if (err) console.log(err)
            res.write(page)
            res.end()
        })
    }

}).listen(80, () => {
    console.log("Server started at: http://localhost/")
})


function check404(url) {
    // console.log(String("/"+routes[1]),"------",String(url));
    return routes.some((el) =>  el === String(url)) ? false : true
}