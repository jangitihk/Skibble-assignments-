let body = document.getElementsByTagName("body")

function changeColor(event) {
    console.log(body);
    body[0].style.backgroundColor = event?.target?.value
}