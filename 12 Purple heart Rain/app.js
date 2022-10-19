function createHeart () {
    const heart = document.createElement("div")
    heart.classList.add("heart")
    heart.textContent = "💜"
    heart.style.left = Math.random()*100+"vw"
    heart.style.animationDuration = Math.random()* 2+3 + "s";
    document.body.append(heart)
    setTimeout(() => {
        heart.remove
    }, 5000);
}
setInterval(createHeart,200)

