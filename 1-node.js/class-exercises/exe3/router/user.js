module.exports = function (req, res) {

  if (req.method === "GET" && req.url === "/user") {
    res.writeHead(200)
    res.write("user")
    res.end()
  }
  if (req.method === "GET" && req.url === "/admin") {
    res.writeHead(200)
    res.write("admin")
    res.end()
  }
  if (req.method === "GET" && req.url === "/profile") {
    res.writeHead(200, {"content-Type": "text/html","X-Powered-By":["express"]})
    res.write("profile")
    res.end()
  }
}