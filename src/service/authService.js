const User = require("../model/userModel")
const bcrypt = require("bcryptjs")

async function addUser(user){
    try{
        const hashPassword = await bcrypt.hash(user.password,10)
        const newUser = new User({
            fullName: user.fullName,
            email: user.email,
            password: hashPassword,
            role: user.role,
            phone: user.phone
        }) 
        return newUser.save();
    }catch(err){
    console.error(err)
    }
}

module.exports = { addUser }