const express = require("express")
const app = express()
app.get("/",(req, res)=>{
    // res.send("Get route")//
    let {name , email} = req.query
    console.log("name:",name);
    console.log("email:",email);
    res.send("Data aa Gaya")
}) 
app.post("/",(req, res)=>{
    res.send("Post route")
})
module.exports = app
