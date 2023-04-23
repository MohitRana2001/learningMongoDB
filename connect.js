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

// const userInstance = new User({
//     email : "rana@gmail.com",
//     password : "Mohit@2003"
// });

// User.find({}, 'password')
// .then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.error(err);
// });

// User.findOneAndUpdate({email:'mohit@gmail.com'}, {password: 'Mohit@2004'})
// .then((data) => console.log(data.password))
// .then(() => {
//     process.exit(0);
// })
// .catch(() => console.log("couldn't find the password"));

// userInstance.save()
// .then( () => {
//     process.exit(0);
// });

module.exports = mongoose.connection;