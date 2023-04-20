const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Successfully connected to database");
}).catch((err) => {
    console.error(err);
});


const {Schema} = mongoose;

const userSchema = new Schema({
    email:
        {
            type: String,
            required: true,
            unique: true
        }
    ,
    password: {
        type: String,
        required: true,
        unique: true
    }
});

const User = mongoose.model('User', userSchema);

const userInstance = new User({
    email : "ranamohit@gmail.com",
    password : "Mohit@2001"
});

userInstance.save()
.then( () => {
    process.exit(0);
});
