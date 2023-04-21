const bodyParser = require("body-parser");
const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require("mongoose");
// const connection = require("./connect");
const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send("Learning in progress");
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});


