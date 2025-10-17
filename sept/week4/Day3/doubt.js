console.log("Today is the doubt clearing class")

// post request
// const postRequest = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         body: JSON.stringify({ userName: "xyz", age: 20 }),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });
//     console.log(response)
//     const data = await response.json();
//     console.log(data)
// }

// postRequest()
// 

// Put request
// const putRequest = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//         method: "PUT",
//         body: JSON.stringify({ title: "this is new title", body: "this is new body" }),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//     const data = await response.json();
//     console.log(data)
// }

// putRequest()

// Delete request
// const deleteRequest=async ()=>{
//     const response=await fetch("https://jsonplaceholder.typicode.com/posts/1",{
//         method:"Delete",
//         headers:{
//             "Content-Type":"application/json"
//         }
//     })
//    const data= await response.json();
//    console.log(data)
// }

// deleteRequest()

// get request
const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await response.json();
    console.log(data)


    const div = document.getElementById("div");

    const ul = document.createElement("ul")
    data.forEach((ele) => {
        const li = document.createElement("li");
        li.innerText=ele.title;
        ul.appendChild(li)
    })

    div.append(ul)
}

getData()


function A(){
    var a=20;
    return a
}

const a=A();
// console.log(a)