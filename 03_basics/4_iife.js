// Immediately Invoked Function Expression (IIFE) 
// Imediately execute after declaration like Db connections

//()() // First defination of the function and second one calling of the function

(function chai(){
    console.log("Chai is Ready")
})();  // Please use semicolon ; this after iife so they end the context

// Use IIFE expression so they not globally polluted

(()=>{
    console.log("Cofee  is also  Ready")
})();


((name)=>{
    console.log(`DB Connected Two ${name}`)
})('Vansh')