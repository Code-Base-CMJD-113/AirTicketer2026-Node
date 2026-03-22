const express = require("express")
const router = express.Router()
const authUrl = "/auth"
const User = require("../model/userModel")
const bcrypt  = require("bcryptjs")
const { addUser } = require("../service/authService")
const jwt = require("jsonwebtoken")

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
            // To be generate the token
         }catch(err){
             console.error(err)
         }
});

//Sign in
 router.post(`${authUrl}/signin`,async(req,res)=>{
     const { email, password} = req.body
     const user = User.findOne({email})
     //check pw validity
     const isValidPassword = await bcrypt.compare(password, user.password)
     if(!user || !isValidPassword){
        return res.status(401).json({message:"Invalid credentials"})
     }
     // To be generate the token

 })