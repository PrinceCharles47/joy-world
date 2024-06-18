const frontPage = document.getElementById("front-page")

function updateWidth(e) {
    const mousePosition = e.clientX
    const windowWidth = window.innerWidth
    const mousePositionPercent = (mousePosition / windowWidth) * 100

    frontPage.style.width = `${mousePositionPercent}%`
    console.log(frontPage.style.width);
}

document.onmousemove = e => updateWidth(e)
document.ontouchmove = e => updateWidth(e.touches[0])