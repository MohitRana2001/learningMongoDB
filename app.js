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
  res.sendFile(__dirname+"/index.html");
});

app.post('/', (req,res) => {
  const userEmail = req.body.user;
  const pass = req.body.pass;

  const newUser = new User({
    email: userEmail,
    password : pass
  });

  newUser.save()
  .then(() => res.send("new user saved succeddfully"))
  .then(() => res.redirect('/success'))
  .catch((err) => {
    res.send(err);
  });
  // res.redirect("/success");
  // res.send("We recieeved your credentials");
});

app.get("/success" , () => {
  res.send("Successfully stored the new user");
})

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});


