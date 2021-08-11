/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})

/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile.pause(); 
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
})

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ra-lion'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ra-snake' : 'ra-lion'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ra-snake ' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


function submit(){
    var gryffindor =0;
    var slytherin =0;
    var hufflepuff =0;
    var ravenclaw =0;
    var Muggel =0;

    var q1 = document.querySelector('input[name="classs"]:checked').value;
    var q2 = document.querySelector('input[name="Spell"]:checked').value;
    var q3 = document.querySelector('input[name="behave"]:checked').value;
    var q4 = document.querySelector('input[name="grow"]:checked').value;
    var q5 = document.querySelector('input[name="position"]:checked').value;


    if(q1 == "gryffindor"){
        gryffindor += 1;
    }
    else if(q1 == 'slytherin'){
        slytherin += 1;
    }
    else if(q1 == 'hufflepuff'){
        hufflepuff += 1;
    }
    else if(q1 == 'ravenclaw'){
        ravenclaw += 1;
    }

    if(q2 == 'gryffindor'){
        gryffindor += 1;
    }
    else if(q2 == 'slytherin'){
        slytherin += 1;
    }
    else if(q2 == 'hufflepuff'){
        hufflepuff += 1;
    }
    else if(q2 == 'ravenclaw'){
        ravenclaw += 1;
    }

    if(q3 == 'gryffindor'){
        gryffindor += 1;
    }
    else if(q3 == 'slytherin'){
        slytherin += 1;
    }
    else if(q3 == 'hufflepuff'){
        hufflepuff += 1;
    }
    else if(q3 == 'ravenclaw'){
        ravenclaw += 1;
    }

    if(q4 == 'gryffindor'){
        gryffindor += 1;
    }
    else if(q4 == 'slytherin'){
        slytherin += 1;
    }
    else if(q4 == 'hufflepuff'){
        hufflepuff += 1;
    }
    else if(q4 == 'ravenclaw'){
        ravenclaw += 1;
    }

    if(q5 == 'gryffindor'){
        gryffindor += 1;
    }
    else if(q5 == 'slytherin'){
        slytherin += 1;
    }
    else if(q5 == 'hufflepuff'){
        hufflepuff += 1;
    }
    else if(q5 == 'ravenclaw'){
        ravenclaw += 1;
    }

    swal({
        title: 'Sorting in Progress!',
        icon: 'https://cdna.artstation.com/p/assets/images/images/019/078/702/original/blake-johnson-animation-test.gif',
        imageAlt: 'Custom image',
        buttons: false,
        timer: 4000,
      }).then(function () {
        swal((gryffindor*20) + '% ' + ' Gryffindor\n\n\n '  + (slytherin*20) + '% ' + ' Slytherin\n\n\n ' +  (hufflepuff*20) + '% ' + ' Hufflepuff\n\n\n ' + (ravenclaw*20)+ '% ' + ' Ravenclaw' ),{buttons: false,}
      })
}


function patronuss(){
    var images = [],
index = 0;
images[0] = "<img src='https://cdna.artstation.com/p/assets/images/images/019/078/702/original/blake-johnson-animation-test.gif' alt='Visit Computer Hope'>";
images[1] = "<img src='/assets/img/order/o1.jpg' alt='Computer History'>";
images[2] = "<img src='/assets/img/hp.png' alt='Visit Computer Hope'>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
}