//import require from "requirejs";
const fs = require("fs");
const http = require("http");

let data = fs.readFileSync("./index.html");
let order = fs.readFileSync("./order.html");
let types = fs.readFileSync("./types.html");
function samp(req, res) {
  if (req.url == "/") {
    res.end(data);
  } else if (req.url == "/types") {
    res.end(types);
  } else if (req.url == "/order") {
    res.end(order);
  } else {
   console.log("404 Error found")
  }
}
var server = http.createServer(samp);
server.listen(8888);
console.log("server running");