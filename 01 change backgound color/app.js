const btn = document.querySelector("button")
const body = document.body

function randomColorGenerator(num){
    return Math.floor(Math.random()*(num + 1))
}

btn.addEventListener("click", ()=>{
    const pick = `rgb(${randomColorGenerator(255)},${randomColorGenerator(255)},${randomColorGenerator(255)})`
    body.style.backgroundColor = pick
})