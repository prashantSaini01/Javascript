// Reduce Function

const myNums = [1,2,4]

// const myTotal = myNums.reduce(function(acc,curr){
//     return acc + curr},0)

// const myTotal = myNums.reduce((acc,curr)=>(acc+curr),5) // I assign accumulator value =5

// console.log(myTotal) 

// Reduce function have two parameters accumulator and current value on first iteration we by ourself assign accumelator value and them accu;ator value will be resullt



const shoppingCart = [{
    name: 'Apple',
    price: 1.00
    },{
        name: 'Banana',
        price: 0.5
        
}]


const totalPrice = shoppingCart.reduce((acc,curr)=>(acc+curr.price),0)

console.log(totalPrice)