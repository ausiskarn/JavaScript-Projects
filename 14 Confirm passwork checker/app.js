const pswd1 = document.querySelector("#password1")
const pswd2 = document.querySelector("#password2")
const btn = document.querySelector("#submit")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const Msg = document.querySelector(".pop")
const show = document.querySelector(".show")
const form = document.querySelector("form")
// console.log(Msg)


form.addEventListener('submit',(e)=> {
    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    //get all the values
   const usernameValues = username.value.trim() //trim removes white space
   const emailValues = email.value.trim()
   const pswd1Values = pswd1.value.trim()
   const pswd2Values = pswd2.value.trim()

   if(usernameValues === ""){
    // show error
    setErrorFor(username,"Username cannot be blank.")
   }else {
    //add success class
    setSuccessFor()
   }
}
function setErrorFor(input,message){
    input.style.back
    Msg.classList.add("error")
    Msg.textContent = message
}