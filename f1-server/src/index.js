const express = require("express");
const app = express();
const dataFetch = require("./data/data.js")

const port = 8080;
let awesome;
async function fetch() {
    let data = await dataFetch.dataPull();
    console.log(data)
    awesome = data;
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-origin", "*")
    res.setHeader("Access-Control-Allow-Method", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.post("/test", (req, res) => {
    console.log("connection Established")
    res.send(awesome)
})

app.listen(port, () => {
    fetch()
    console.log("Listening on port 8080")
    // console.log(dataFetch.dataPull())s
});

// POST Request