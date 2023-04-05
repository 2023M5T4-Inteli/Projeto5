const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../html/login.html"));
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../html/main.html"));
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../html/grupo.html"));
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../html/criargrupo.html"));
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../html/contrato.html"));
})

const server = app.listen(5500);
const portNumber = server.address().port;
console.log(`port: ${portNumber}`); 
