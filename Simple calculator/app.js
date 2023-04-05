let value1 = document.getElementById("Num1")
let value2 = document.getElementById("Num2")
let value3 = document.getElementsByClassName("Result")

function addition(){
    console.log("hello" , value3[0].value )
value3[0].value = parseInt(value1.value)  + parseInt(value2.value) ;
    
}


function subtraction(){
    console.log("hello" , value3[0].value )
value3[0].value = parseInt(value1.value)  - parseInt(value2.value) ;
    
}


function multiplication(){
    console.log("hello" , value3[0].value )
value3[0].value = parseInt(value1.value) * parseInt(value2.value) ;
    
}

function divide(){
    console.log("hello" , value3[0].value )
value3[0].value = parseInt(value1.value) % parseInt(value2.value) ;
    
}