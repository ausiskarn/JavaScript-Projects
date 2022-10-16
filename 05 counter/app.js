const display = document.querySelector("#display");
const btns = document.querySelectorAll(".btn");


// add.addEventListener("click",() => {

// })

let count = 0;

// console.log(btns)
btns.forEach(btn => {
    btn.addEventListener("click",(e)=> {
        const btnclass = e.currentTarget.classList

        if(btnclass.contains("add")){
            count++
            // display.textContent = count;
            
        }
        else if (btnclass.contains("sub")) {
            count--
            // display.textContent = count;
            
        }
        else {
            count = 0;
            // display.style.color = count;
        }
        if(count === 0){
            display.style.color = "#000";
            display.textContent = count;
        }
        if (count > 0) {
            display.style.color = "orange";
            display.textContent = count;
        }
        if(count < 0) {
            display.style.color = "red";
            display.textContent = count;
        }

    })
})
