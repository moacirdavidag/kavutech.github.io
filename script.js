// Buttons
const buttonHome = document.getElementById("home")
const buttonAbout = document.getElementById("about")
const buttonPortfolio = document.getElementById("portfolio")
const buttonContact = document.getElementById("contact")
const buttonLogo = document.getElementById("logo")

const contentSpace = document.getElementById("section")

let currentPage = 1

// HTML Content
// const homeHTML = `<h1>Texto de Inicio</h1>`
const aboutHTML = `<h1>Texto de Sobre</h1>`
const portfolioHTML = `<h1>Texto de Portfolio</h1>`
const contactHTML = `<h1>Texto de Contato</h1>`

buttonHome.onclick = buttonLogo.onclick = () => {
    contentSpace.innerHTML = homeHTML
    buttonHome.focus()
}
buttonAbout.onclick = () => {
    contentSpace.innerHTML = aboutHTML
}
buttonPortfolio.onclick = () => {
    contentSpace.innerHTML = portfolioHTML
}
buttonContact.onclick = () => {
    contentSpace.innerHTML = contactHTML
}

buttonHome.click()