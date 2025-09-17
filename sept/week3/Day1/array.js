console.log("Today we are going to learn Array methods")

const arr = [1, 2, 3, 5, 6, 7, "qlith", { name: "xyz", age: 20 }, ["deepak", "chandan", "bharat", "ashwin", "Faruk"]];

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

for (let v of arr) {
    console.log(v)
}

const nameArr = arr[arr.length - 1];

for (let v of nameArr) {
    console.log(v)
}

let numArr = [85, 97, 44, 37, 76, 60];

let sum = 0;
for (let v of numArr) {
    sum = sum + v;
}

console.log("Avarage of the Element :", sum / (numArr.length))


numArr.push(70, 80, "ksjd")
console.log(numArr)

numArr.pop()
console.log(numArr)

console.log(numArr.toString())

console.log(numArr.concat([2, 2, 4, 5]))

numArr.unshift(9, 5)
console.log(numArr)

numArr.shift()
numArr.shift()
const newArr = numArr.slice(0, 6)
console.log(newArr)

let demoArr = [1, 2, 3, 4, 5, 6];

console.log(demoArr)
demoArr.splice(2, 1)
console.log(demoArr)
demoArr.splice(2, 1, "this is 4", 70)
console.log(demoArr)

const companiesArr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
companiesArr.shift();
console.log(companiesArr)

companiesArr.splice(1, 1, "Ola");
console.log(companiesArr)

companiesArr.push("Amazon")
console.log(companiesArr)

// function
//function declaration
// function printSomething(){
//     console.log("printing")
// }

// // function calling
// printSomething()


let printSomething = function (a) {
    console.log("printing",a)
}

printSomething(10)


