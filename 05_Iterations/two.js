// while(condition){

// }

// While Loop



let i =0
while(i<=10){
    console.log(i)
    if (i==10) break

    i+=2

}


// do while --> At least runs once if we fails to meet the condition
let score=25
do{
    console.log(`Score is ${score}`)
    score+=2
}while(score<25);