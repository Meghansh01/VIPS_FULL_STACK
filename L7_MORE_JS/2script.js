const positionBtn = document.querySelector("#position-btn")

// Create image element
const img = document.createElement("img")
img.src = "https://e7.pngegg.com/pngimages/539/906/png-clipart-crayon-shin-chan-shinnosuke-nohara-drawing-cartoon-animation-comics-child.png"
img.alt = "Random Image"
img.style.position = "fixed"
img.style.width = "150px"
img.style.height = "auto"
img.style.transition = "all 0.3s ease"
img.style.display = "none" // Initially hidden
document.body.appendChild(img)

positionBtn.addEventListener("click", () => {
    // Show image if hidden
    if (img.style.display === "none") {
        img.style.display = "block"
    }
    // Calculate random position within viewport
    const maxX = window.innerWidth - img.offsetWidth
    const maxY = window.innerHeight - img.offsetHeight
    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)
    img.style.left = randomX + "px"
    img.style.top = randomY + "px"
})
