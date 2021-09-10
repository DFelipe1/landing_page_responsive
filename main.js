//  ============ Show Menu  ============ 
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

//  ============ Menu Show  ============ 
// Validate if sontant exists
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}   

//  ============ Menu Hidden  ============ 
// validate if contant exists 
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}
//  ============ Remove Menu Mobile  ============ 
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

//  ============ Change Backgroung Header  ============ 
function scrollHeader() {
    const header = document.getElementById('header');
    
    if(this.scrollY >= 50) {
        header.classList.add('scroll-header') 
    } else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)

//  ============ SHOW SCROLL UP ============
function scrollup() {
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollup)

//  ============ Scroll Sections Active  ============ 
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
//  ============ Scroll Reveal Animations  ============ 
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true
})

sr.reveal(`.home_header, .section_title`,{delay: 600})
sr.reveal(`.home_footer`,{delay: 700})
sr.reveal(`.home_img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsor_img, .products_card, .footer_logo, .footer_content, .footer_copy`,{origin: 'top', interval: 100})
sr.reveal(`.specs_data, .discount_animate`,{origin: 'left', interval: 100})
sr.reveal(`.specs_img, .discount_img`,{origin: 'right'})
sr.reveal(`.case_img`,{origin: 'top'})
sr.reveal(`.case_data`)