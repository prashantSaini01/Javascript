const form = document.querySelector('form')
// console.log(form)
// If we use query selector here for height and weight empty values will be selected


form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height ==='' || height <0 || isNaN(height)){
        results.innerHTML = "Please give a valid height"
    }
    else if (weight==='' || weight <0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight"
    }
    else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2)
        // Show the result
        results.innerHTML =`<span>${bmi}</span>`

        if (bmi<18.6){
            results.innerHTML +=`<span> You are Underweight</span>`
        }
        else if (bmi>18.6 && bmi<24.9){
            results.innerHTML +=`<span> You are Normal</span>`
        }
        else if (bmi>24.9 && bmi<29.9){
            results.innerHTML +=`<span> You are Overweight</span>`
    }
    else{
        results.innerHTML +=`<span> You are Obese</span>`
    }
}

});