const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true})) /* Makes the data readable unlike req.body*/
app.get("/",(req, res)=>{
    // res.send("Get route")//
    let {name , email} = req.query
    console.log("name:",name);
    console.log("email:",email);
    res.send("Data aa Gaya")
}) 
app.post("/",(req, res)=>{
     let {name , email} = req.body /*data isn't readable in req.body */
    console.log("name:",name);
    console.log("email:",email);
    res.send("Post route")
})
/*Dynamic Routing*/
app.get("/user/:id", (req, res)=>{
    let{id}= req.params

    console.log("id:",id);
    res.send("ID received")
})
module.exports = app
