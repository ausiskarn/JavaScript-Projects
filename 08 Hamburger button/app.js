const btn = document.querySelector(".btn")
const nav = document.getElementById("nav")

btn.addEventListener("click",()=> {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
})