const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
