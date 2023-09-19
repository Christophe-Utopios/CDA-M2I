const madate = new Date()
console.log(madate)

// setInterval(() => {
//     console.log("3 sercondes plus tard")
//     console.log(new Date())
// },3000)

// Réliser un timer

setTimeout(() => {
    console.log("3 sercondes plus tard")
     console.log(new Date())   
},3000)

const timer =document.querySelector("#timer")
const btnIn =document.querySelector("#entrer")
const btnOut =document.querySelector("#sortir")
let inTime,outTime
let temps = 0

btnIn.addEventListener('click',(e) => {
    //console.log(e)
    inTime = new Date()
   // console.log(inTime)
})

btnOut.addEventListener('click',(e) => {
    outTime = new Date()
    console.log(inTime)
    console.log(outTime)
    alert((outTime-inTime)/1000)
})

