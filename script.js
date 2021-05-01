// Buttons
const buttonHome = document.getElementById("home")
const buttonAbout = document.getElementById("about")
const buttonPortfolio = document.getElementById("portfolio")
const buttonContact = document.getElementById("contact")
const buttonLogo = document.getElementById("logo")
const navButton = document.getElementById("btnNav_mobile");

const contentSpace = document.getElementById("section")

let currentPage = 1

// HTML Content
 /* const homeHTML = `<section class="section" id="section">
      <img src="computerhome.png" alt="computer_homeimg" class="box_img" />
      <h1 id="home_h1">SOLUÇÕES EM TECNOLOGIA PARA FACILITAR O SEU DIA A DIA.</h1>
      <a href="#"><input type="button" id="home_button" value="CONHEÇA NOSSOS PRODUTOS" /></a>
    </section>
    <section class="section">
      <img class="box_img" src="2.png" alt="assitencia_img" />
      <h1>ASSISTÊNCIA TÉCNICA 24H/7</h1>
      <h3>Te ajudamos no que precisar. É só chamar e nossa equipe estará te assistindo em suas necessidades!</h3>
    </section>
    <section class="section" id="section">
      <img class="box_img" src="3.png" alt="digital_img" />
      <h1>DIGITALIZE O SEU NEGÓCIO</h1>
      <h3>Nossos produtos são capazes de conectar sua empresa ao mundo digital e impulsionar a sua presença no mercado.</h3>
    </section>
    <section class="section">
      <img class="box_img" src="4.png" alt="virtual_img" />
      <h1>NÃO PERCA MAIS CLIENTES</h1>
      <h3>Ofereça os seus produtos em qualquer hora e para clientes de qualquer local! A Kavutech oferece softwares especializados em vendas que alavancarão o seu comércio.</h3>
    </section>`; */
    
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

// Display nav do mobile
let count = 0; // auxiliar pra fechar o menu

navButton.onclick = () => { 
  let body = document.body;
  body.style.overflow = "hidden";
  count++;
  const menuNav = document.getElementById("mobile_nav");
  menuNav.style.display = "block";
  if(count == 2) {
    menuNav.style.display = "none";
    body.style.overflow = "scroll";
    count = 0;
  }

}