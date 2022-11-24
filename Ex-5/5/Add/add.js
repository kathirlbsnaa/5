
const fs = require("fs");
const http = require("http");
const url = require("url");

let data = fs.readFileSync("./index.html");
let order = fs.readFileSync("./options.html");
let login = fs.readFileSync("./login.html");
function samp(req, res) {
  if (req.url == "/index") {
    res.end(data);
  } else if (req.url == "/options") {
    res.end(order);
  } else if (req.url == "/login") {
    res.end(login);
  } else {
    res.end("<h1>error</h1>");
  }
}
const server = http.createServer(samp);
server.listen(8000);
console.log("server running");
