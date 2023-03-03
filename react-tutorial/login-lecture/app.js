const express = require("express");
const app = express();

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home/index")
});

app.get("/login", (req, res) => {
    res.render("home/login")
});

app.listen(3000, function() {
    console.log('start server');
});

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


