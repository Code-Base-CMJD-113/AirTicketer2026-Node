const express = require("express")
const app = express()
const PORT = 3500
const airportRoute = require("../src/routes/airportRoute")

app.get("/",(req,res)=>{
    res.send("Hello CMJD 113")
})
app.use("/air/api/v1",airportRoute)

app.listen(PORT,()=>{
    console.log("Server started at ",PORT)
})