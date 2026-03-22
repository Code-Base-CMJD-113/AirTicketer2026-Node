// All Routes of  Airport CRUD
const express = require("express")
const router = express.Router()
const airportURL = "/airports"
const airportService = require("../service/airportService")
const Airport = require("../model/airportModel")

router.get(airportURL, async (req,res)=>{
    try{
       const allAirports =
        await airportService.getAllAirports()
        const filterList = allAirports.map(airport => ({
            airportId: airport.airportId,
            airportCode: airport.airportCode,
            name: airport.name,
            city: airport.city,
            country: airport.country
        }))
        console.log(filterList)
        res.status(200).json(filterList)
    }catch(err){
        console.error("Fetch airport data faild")
        res.status(500).send("Internal process issue")
    }
    
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
