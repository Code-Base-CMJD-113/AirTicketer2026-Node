// All Routes of  Airport CRUD
const express = require("express")
const router = express.Router()
const airportURL = "/airports"

router.get(airportURL,(req,res)=>{
    res.send("GET Airport details")
})

router.post(airportURL,(req,res)=>{
    res.send("POST Airport details")
})

router.patch(airportURL,(req,res)=>{
    res.send("PATCH Airport details")
})

router.delete(airportURL,(req,res)=>{
    res.send("DELETE Airport details")
})

module.exports = router;
