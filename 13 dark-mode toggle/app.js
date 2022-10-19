const container = document.querySelector(".container")
const input = document.getElementById("toggle")
const body = document.body;


input.addEventListener('change',(e)=> {
    body.classList.toggle("dark",
    e.target.checked)
    
})

