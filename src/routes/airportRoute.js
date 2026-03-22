// All Routes of  Airport CRUD
const express = require("express")
const router = express.Router()
const airportURL = "/airports"
const airportService = require("../service/airportService")

router.get(airportURL,(req,res)=>{
    airportService.getAllAirports()
    res.send("GET Airport details")
    
})

router.post(airportURL,(req,res)=>{
    airportService.savetAirport()
    res.send("POST Airport details")
})

router.patch(airportURL,(req,res)=>{
    airportService.updateAirport()
    res.send("PATCH Airport details")
})

router.delete(airportURL,(req,res)=>{
    airportService.deletelAirport()
    res.send("DELETE Airport details")
})

module.exports = router;
