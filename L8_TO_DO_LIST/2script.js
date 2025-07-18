// console.log("Hello")
// // import - export is default (async)
// // require- MediaSourceHandle.export (sync)

// const sum = require("./math")
// console.log(sum(20 , 40));

const fs = require("node:fs")
// fs.readFile("math.js",'utf8',(err , data)=>{
//     if(err){
//     console.log(err);
//     return
//     }
//     else{
//         console.log(data);
//     }
// })
// fs.writeFile("text.txt","Kya haal chaal",(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("file created successfully");

// })

// fs.appendFile("text.txt"," Sab Theek broo",(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     else{
//         console.log("data appended")
//     }
// })

// fs.unlink("text.txt",(err)=>{
//     if(err){
//     console.log(err);
//     }
//     else{
//         console.log("File was deleted");
//     }
// })

// fs.mkdir("Sample",(err)=>
// {
//     if(err){
//         console.log(err);

//     }
//     else{
//         console.log("Folder created");
//     }
// })

fs.readdir("Samle",(err , file)=>
{
    if(err){
        console.log(file);
    }
    else{
        console.log(file);
    }
})
fs.rmdir("Sample",{ recursive: true, force: true },(err)=>{ 
    if(err){
        console.log(err);
    }
    else{
        console.log("Remove Folder");
    }
})
