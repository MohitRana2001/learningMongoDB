const mongoose = require("mongoose");
require('dotenv').config();
const userSchema = require('./models/users');

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Successfully connected to database");
}).catch((err) => {
    console.error(err);
});

const User = mongoose.model('User', userSchema);

const userInstance = new User({
    email : "mohit@gmail.com",
    password : "Mohit@2002"
});

userInstance.save()
.then( () => {
    process.exit(0);
});

module.exports = mongoose.connection;