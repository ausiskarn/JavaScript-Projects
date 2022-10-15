const btn = document.querySelector(".btn");
const value = document.querySelector(".hex")
const body = document.body
const hexValues = [1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f"]

const changeColor = () => {
    let hex = "#"
    for(let i=0; i<6; i++){
        const index = Math.floor(Math.random()*hexValues.length)
        hex += hexValues[index]

    }
    
    value.textContent = hex;
    body.style.backgroundColor = hex;
}

btn.addEventListener("click", changeColor)

