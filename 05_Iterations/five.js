// For each Loop  // High Order Function

const coding = ["js","python","ruby","cpp"]

coding.forEach(function (item){
    console.log(item)
})

coding.forEach((item)=>{
    console.log(item)
})

function printMe(item){
    console.log(item)
}

coding.forEach(printMe)  //     only reference give to already made function not call


coding.forEach((item,index,arr)=>{   // For each function Superiority
    console.log(item,index,arr)
})


const myCoding =[
    {
        langauageName : "Javascript",
        languageSign : "Js"
    },    {
        langauageName : "   Ruby",
        languageSign : "Re"
    },    {
        langauageName : "C++",
        languageSign : "cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.langauageName,item.languageSign)

})