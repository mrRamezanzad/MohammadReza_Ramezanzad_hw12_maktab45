module.exports = function (req, res, routes) {
    const fs = require("fs"),
        path = require("path")

    if (req.method === "GET" && req.url.includes("public")) {

        if (routes.some(el => el === req.url)) {

            fs.readFile(path.join(__dirname, "..", req.url), (err, file) => {

                console.log();
                res.writeHead(200, {})
                res.end(file)
            })
        }
    }
}