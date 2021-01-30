module.exports = function (req, res) {
  const fs = require('fs')

  if (req.method === "GET" && req.url === "/admin/getAllUsers") {
    fs.readFile("./DB/informations.json", (err, file) => {
      if (err) console.log(err)
      res.writeHead(200)
      res.write(file)
      res.end()
    })
  }
}