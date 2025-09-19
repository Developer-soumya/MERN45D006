console.log("Hello we are going to start Function")

// expressional function

const expressionalFunction = function () {
    console.log("this is a expressional function")
}
expressionalFunction()
// console.log(expressionalFunction)

const arrowFun = (a) => {
    console.log("this is a arrow function")
    console.log("value is ", a)
}

arrowFun(40)


let getValue = () => {
    let a = 90;
    return a;
}

console.log(getValue())

function sendNewFun() {
    return () => {
        console.log("this is returned fun")
    }
}

sendNewFun()()

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// for(let v of arr){
//     console.log(v)
// }

// arr.forEach((v,idx)=>{
// console.log(v)
// })

const newArr = arr.map((v) => {
    return v * 2;
})

console.log(newArr)

const filterArr = arr.filter((v) => {
    return v % 2 == 0;
})

console.log(filterArr)

// let a=0;
// for(let v of arr){
//     a=a+v;
// }

let summation = arr.reduce((sum, accu) => {
    return sum + accu;
}, 0)

console.log(summation)

const n = prompt("Enter a number");

let domyArr = [];
for (let i = 1; i <= n; i++) {
    domyArr.push(i)
}
console.log(domyArr)

const sum = domyArr.reduce((add, accu) => {
    return add + accu;
}, 0)
const mult = domyArr.reduce((mul, accu) => {
    return mul * accu;
}, 1)

console.log(sum)
console.log(mult)