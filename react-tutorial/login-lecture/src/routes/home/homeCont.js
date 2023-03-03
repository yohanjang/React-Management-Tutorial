"use strict";

const home = (req, res) => {
    console.log("root page");
    res.render("home/index")
};

const login = (req, res) => {
    console.log("login page");
    res.render("home/login")
};

module.exports = {
    home: home,
    login: login,
};
