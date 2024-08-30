// for loop
arr = [1,2,3,3,4]
for(let i=0;i<arr.length;i++){
    let element = arr[i]
    console.log(element)
}


let myArray = ["flash","batman","superman"]

for(let i=0;i<myArray.length;i++){
    const element = myArray[i]
    console.log(element)
}


// break and continue

for(let i=1;i<=20;i++){
    if (i==3){
        console.log("3  is their")
        continue
    }
    if(i==5){
        console.log("5 is detected")
        break
    }
    console.log(`value of i is ${i}`)
}