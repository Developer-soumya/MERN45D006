// // callback hell

// function getData(a,next) {
//     setTimeout(()=>{
//         console.log("data ",a)
//         next()
//     },2000)
// }

// getData(1,()=>getData(2,()=>getData(3)))

// // promise chain

const promise = new Promise((resolve, rej) => {
    setTimeout(()=>{
        rej("reject")
    },2000)
})

promise.then(()=>{
    console.log("promise resolved")
}).catch((msg)=>{
    console.log("promise rejected",msg)
})

// function getData() {
//     const data = fetch("https://jsonplaceholder.typicode.com/post");
//     return data
// }

// getData().then((res) => {
//     const data=res.json()
//     data.then((result)=>{
//         console.log(result)
//     }).catch(()=>{
//     console.log("the request rejected")
// })
//     console.log(res)
// })

