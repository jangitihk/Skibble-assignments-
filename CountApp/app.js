let number=document.getElementsByClassName("number")


function Decrease(){
    console.log("Hiiii",number[0].innerHTML)
    number[0].innerHTML = number[0].innerHTML-1;

}


function Increase(){
    console.log(number)
    
    number[0].innerHTML = Number(number[0].innerHTML)+1;
}

function Reset(){
    console.log(number)
    number[0].innerHTML = 0; 
}