const container = document.querySelector(".container")
const btns = document.querySelectorAll(".btn")


btns.forEach(btn=> {
    btn.addEventListener("click" , e => {
        const style = e.currentTarget
        container.classList.toggle("active")
    })
})


