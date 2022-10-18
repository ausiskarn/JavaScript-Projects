const btn = document.querySelector(".btn")
const container = document.querySelector(".container")
btn.addEventListener("click",()=> {
    creaateNotification();
})
function creaateNotification(){
    const notify = document.createElement("div")
    notify.classList.add("toast")
    notify.textContent = "This is a challenge bro.."
    container.append(notify);

    setTimeout(() => {
        notify.remove();
    }, 3000);
}