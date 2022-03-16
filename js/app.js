const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.list-item')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
    // reset: true
})

sr.reveal(`.about-us, .new-post, .hr`)
sr.reveal(`.about-img`, {delay: 500})
sr.reveal(`.about-us h1, p`, {delay: 600})
sr.reveal(`.my-career-text, .contact-form h1, .my-career-text h1, .my-career-text p`,{origin: 'left'})
sr.reveal(`.service ,form`,{origin: 'right'})
sr.reveal(`.h1-animate, .h3-animate, .btn-animate, footer, .portfolio`,{interval: 100})








    
