let array=[1,2,3,55,12]
let arr={
   emp1: {
        name:"chinmaya",
        age:20,
    },
   emp2:{
        name:"chinmaya sahoo",
        age:27,
    },
}
let arr2={
    name:"chinu",
    age:22,sal:2222,
}
//for...in loop
for(let x in arr){
    console.log(arr[x]);
}
for(let x in array){
    console.log(array[x]);
}

//for...of loop
for( let val of array){
    console.log(val );
}

// let s= Symbol("cxddvcvwdc")
// let s2= Symbol("cxddvcvwdc")

// console.log(s==s2);