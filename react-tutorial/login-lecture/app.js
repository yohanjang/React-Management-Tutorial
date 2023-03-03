"use strict";

// module
const express = require("express");
const app = express();

// routing
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home);  // use -> 미들웨어

module.exports = app;

// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
//     console.log(req.url);
//     if (req.url === "/") {
//         res.end("http root page, 루트 페이지");
//     } else if (req.url === "/login") {
//         res.end("http login page, 로그인 페이지");
//     }
// });

// app.listen(3001, () => {
//     console.log('http server start');
// });
