module.exports = function (req, res) {
  const fs = require("fs")

  if (req.method === "POST" && req.url === "/user/getUser") {
    fs.readFile("./DB/informations.json", (err, informations) => {
      if (err) console.log(err)
      informations = JSON.parse(informations)
      let data = '';

      try {
        req.on('data', chunk => {
          data += chunk;
        })
        req.on('end', () => {
          data = JSON.parse(data)
          let user = findUser(data, informations)
          res.writeHead(200)
          if (typeof user !== "undefined") res.write(JSON.stringify(user))
          
          res.write("no user with this name")
          res.end()
        })
      } catch (err) {
        console.log(err);
      }

    })
  }
}

function findUser(data, informations) {
  return informations.data.find(el => el.first_name === data.first_name)
}