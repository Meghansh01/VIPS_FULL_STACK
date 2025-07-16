let newArr=arr.filter((val , index)=>{ //creates a new array containing only the elements that satisfy a given condition in cb function
    if(val%2!=0)
    {
        return val
    }
})
console.log(newArr);
console.log(newArr.length);