let promise = new Promise((resolve , reject)=>{
    let num = Math.floor(Math.random()*2);
    if(num === 0){
        //resolve homework done
        setTimeout(()=>{
            resolve("Homework done!");
        },2000)
    }
    else{
        reject("Very Bad");
    }
})
console.log(promise);