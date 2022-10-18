const wrapper = document.querySelector(".wrapper")
const header = wrapper.querySelector("header")
console.log(wrapper,header)

function onDrag(e){
   
    wrapper.style.left = e.pageX + "px";
    wrapper.style.top = e.pageY + "px";
    
}

wrapper.addEventListener("mousedown",()=> {
    wrapper.addEventListener("mousemove",onDrag)
})

wrapper.addEventListener("mouseup",() => {
    wrapper.removeEventListener("mousemove", onDrag)
})