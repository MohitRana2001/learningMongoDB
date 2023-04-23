const bodyParser = require("body-parser");
const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require("mongoose");
const connection = require("./connect");
const userSchema = require("./models/users");
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

const User = mongoose.model('User', userSchema);

app.get('/', (req,res) => {
  res.send("Hello there!!!");
});

app.post('/', (req,res) => {
  const user = req.body.user;
  const password = req.body.pass;

  const newUser = new User({user, pass : password});

  newUser.save()
  .then(() => res.send("new user saved succeddfully"))
  .then(() => res.redirect('/success'))
  .catch((err) => {
    res.send(err);
  });
  res.redirect()
  // res.send("We recieeved your credentials");
})

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});


