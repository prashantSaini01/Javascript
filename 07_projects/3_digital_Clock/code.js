const clock = document.getElementById('clock')



// Set Interval method kitne der baad chalna h event listener

setInterval(function(){
    let date = new Date()
    clock.innerHTML=date.toLocaleTimeString();
},100);
