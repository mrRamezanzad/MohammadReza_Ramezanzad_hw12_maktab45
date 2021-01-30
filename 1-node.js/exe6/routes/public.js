module.exports = function (req, res, publicPath, routes) {
    const fs = require("fs"),
        path = require("path")

    if (req.method === "GET" && req.url.includes("public")) {

        if (routes.some(el => el === req.url)) {

            fs.readFile(path.join(publicPath, req.url), (err, file) => {

                console.log();
                res.writeHead(200, {})
                res.end(file)
            })
        }
    }
}