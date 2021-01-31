const fs = require("fs"),
    path = require("path")
const {
    finished
} = require("stream")
module.exports = function (req, res, isLoggedIn) {

    // login page
    if (req.method === "GET" && req.url === "/login") {
        fs.readFile(path.join(__dirname, "..", "/views/login.html"), "utf8", (err, page) => {
            if (err) console.log(err)
            res.writeHead(200)
            res.write(page)
            res.end()
        })
    }

    // authenticate post request handler
    if (req.method === "POST" && req.url === "/login") {

        if (isLoggedIn) {

            res.writeHead(200, {
                "Content-Type": "application/json"
            })
            console.log("loggedIN");
            res.write("You are Logged in")
            res.end()

        } else {

            // console.log("not logged");
            formData = ""
            req.on("data", chunk => {
                formData += chunk
            })
            req.on("end", () => {

                res.writeHead(200, {
                    "Content-Type": "application/json"
                })
                console.log(authenticateUser(JSON.parse(formData)));
                if (authenticateUser(JSON.parse(formData))) {
                    res.write("You are logged")
                    res.end("logged")
                } else {
                    res.write("You are not Logged in")
                    res.end("logged")
                }
            })

        }
    }

    // panel and profile page 
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

// authentication
function authenticateUser(formData) {
    let response = {}

    let users = fs.readFileSync(path.join(__dirname, "..", "DB/users.json"), "utf8")
    users = JSON.parse(users)
    // console.log(users.data[2].userName ,users.data[2].password  );
    // console.log(formData.username, formData.password);
    return users.data.find(el => el.userName === formData.username && el.password === formData.password) ?
        response.success = true : response.success = false



}