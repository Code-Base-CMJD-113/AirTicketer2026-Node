const mongoose = require("mongoose")
const { v4: uuid4} = require("uuid")

const userSchema = new mongoose.Schema({
    userId:{
        type: String,
        default: () => uuid4(),
        unique: true
    },
    fullName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    phone: {type: String, required: true}
});

module.exports = mongoose.model("user",userSchema)