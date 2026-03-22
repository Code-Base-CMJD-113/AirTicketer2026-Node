const express = require("express")
const router = express.Router()
const authUrl = "/auth"
const User = require("../model/userModel")
const bcrypt  = require("bcryptjs")
const { addUser } = require("../service/authService")
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET;

//SignUp
router.post(`${authUrl}/signup`,async(req,res)=>{
    const { 
        fullName, 
        email, 
        password, 
        role,
         phone } = req.body
        
         if(!fullName || !email || !password || !role || !phone){
             return res.status(401).json({message:"Missing required field/s"})
         }
         try{
            const user = addUser(req.body)
            const token = jwt.sign({userId: user.email}, jwtSecret, {expiresIn:'1h'})
            return res.status(200).json({message:"User created",token})
         }catch(err){
             console.error(err)
         }
});

//Sign in
 router.post(`${authUrl}/login`,async(req,res)=>{
     const { email, password} = req.body
     const user = await User.findOne({email})
     //check pw validity
     const isValidPassword = await bcrypt.compare(password, user.password)
     if(!user || !isValidPassword){
        return res.status(401).json({message:"Invalid credentials"})
     }
     const token = jwt.sign({userId: user.email}, jwtSecret, {expiresIn:'1h'})
     return res.json(token)
 })

 module.exports = router