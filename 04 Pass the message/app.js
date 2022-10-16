const message = document.querySelector("#message");
const input = document.querySelector(".inputBox")
const send = document.querySelector("#btn")
// console.log(message, input, submitbtn) 

send.addEventListener("click", deliveredMessage)
function deliveredMessage(){
    let textvalue = input.value;
    message.textContent = textvalue;
    
}