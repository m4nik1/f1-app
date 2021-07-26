const express = require("express");
const app = express();
const dataFetch = require("./data/data.js")

const port = 8080;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-origin", "*")
    res.setHeader("Access-Control-Allow-Method", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get("/test", (req, res) => {
    console.log("connection Established")
    // res.send("hello world")
})

app.listen(8080, () => {
    console.log("Listening on port 8080")
    dataFetch.dataPull()
});

// POST Request