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
router.post(airportURL,async (req,res)=>{
    try{
        const airport =  new Airport({
            airportCode: req.body.airportCode,
            name: req.body.name,
            city: req.body.city,
            country: req.body.country,
         });
         await airportService.savetAirport(airport)
         res.status(201).send("Saved airport data successfuly")
    }catch(err){
        console.log("Failed to save airport data", err)
    }
})

router.patch(`${airportURL}/:id`,async (req,res)=>{
    try{
        const id = req.params.id
        const body = req.body
       await airportService.updateAirport(id,body)
       res.status(204).send("Airport data updated")
    }catch(err){
        console.error(err)
    }
})

router.delete(`${airportURL}/:id`,async(req,res)=>{
    try{
        const id = req.params.id
        airportService.deletelAirport(id)
        res.status(204).send("Airport data deleted")
    }catch(err){
        console.error(err)
    }

})

module.exports = router;
