const http = require("http")
let server = http.createServer((req , res)=>
{
    if(req.url ==="/" && req.method === "GET"){
        res.end("GET home route")
    }
    if(req.url==="/"){
        res.end("Home Route")
    }
    if(req.url==="/about"){
        res.end("About Page")
    }
})
let port=3000
server.listen(port, ()=>{
    console.log("Server is running on port no:",port);
})  /*On which port no. u want to run server on , using cb function is optional*/