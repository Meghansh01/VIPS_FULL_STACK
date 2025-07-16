// let colors = ['red','green','orange','blue','white'] 
// colors.splice(1,2); // 1 will see index to be cut from , 2 is no. of elements to be cut including element on mentioned index
// console.log(colors);
// let str = "hello world"
// str.split(" , ")
// console.log(str);

// let str="hello world everyone"
// let arr=str.split(" ")
// console.log(arr)// will make str in split in tokens by spacing them with commas
// console.log(arr.join(" "));// will join elements of str split by split

// let arr = [10,20,30,40,50]
// let newArr = arr.map((val , index)=>{ //map creates a new array by applying a function to each element of the original array.
//     return val += 5;
// })
// console.log(newArr);

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let newArr=arr.filter((val , index)=>{ //creates a new array containing only the elements that satisfy a given condition in cb function
//     if(val%2!=0)
//     {
//         return val
//     }
// })
// console.log(newArr);
// console.log(newArr.length);

// arr.reduce((prev , val)=>{ //reduces the array to a single value by adding prev an val , prev is the first  element val is the next element , in the next iteration added value will be considered as prev 
//     console.log("previous ---> ",prev);
//     console.log("current ---> ",val);
//     return prev + val;
// })

// arr.forEach((val , index)=>
// {
//     return val++
// })

// let obj = {
//     naam: "Raj",
//     lastnaam: "Gupta",
//     age:20,

//     address :{
//         city : "Nagpur",
//         state: "Maharashtra",
//     },
//     fun : function(){
//         console.log("Hello everyone from",this.naam);
//     }
// }
// obj.naam = "Meghansh"
// obj.fun();

function number(a, b , ...numbers){ //"..." will make array named numbers & store rest of values in that array
    console.log(numbers);
}
number(10,20,30,40,50)