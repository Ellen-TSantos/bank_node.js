const express = require("express");

const app = express();
app.use(express.json());


const clientRouter = require("./router/clientRouter");
app.use( "/", clientRouter);




module.exports = app;