let arr=["hii","bye","good","soumya"]

for(let v of arr){
    if(v.startsWith("s")){
        console.log(v)
    }
}

let str="Qlith"
let reversedStr=""

for(let i=str.length-1;i>=0;i--){
    reversedStr=reversedStr+str[i]
}

console.log(reversedStr)

let str1="Qlith"

console.log(str1.split(""))
console.log(str1.split("").reverse())
console.log(str1.split("").reverse().join(""))

let str2="alkdjfwle";
let count=0;

for(let v of str2){
    if(v==="a" || v ==="e" || v==="i" || v==="o"|| v==="u"){
        count++;
    }
}
console.log(count)


let vawelCount=0
for(let v of str2){
    if("aeiou".includes(v)){
        vawelCount++
    }
}

console.log("count",vawelCount)
