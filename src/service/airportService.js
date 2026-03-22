const Airport = require("../model/airportModel")

async function getAllAirports () {
    return Airport.find()
}

async function savetAirport (airport) {
    const savedAirport = new Airport(airport)
    return savedAirport.save()
}

async function updateAirport (airportId, airport) {
    return Airport.findOneAndUpdate({airportId: airportId},airport,{new: true})
}

async function deletelAirport (airportId) {
  return Airport.findOneAndDelete({airportId})
}

module.exports = { getAllAirports, savetAirport, updateAirport, deletelAirport }