const textarea = document.querySelector("textarea")
textarea.addEventListener("keyup",e=> {
    let scrollht = e.target.scrollHeight;
    textarea.style.height = `${scrollht}px`
})