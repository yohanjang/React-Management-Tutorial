const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("server root");
});

app.get("/login", (req, res) => {
    res.send("display login page");
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


