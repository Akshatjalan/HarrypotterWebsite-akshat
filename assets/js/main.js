/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

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
});

/*==================== VIDEO ====================*/
const videoFile = document.getElementById("video-file"),
  videoButton = document.getElementById("video-button"),
  videoIcon = document.getElementById("video-icon");

function playPause() {
  if (videoFile.paused) {
    // Play video
    videoFile.play();
    // We change the icon
    videoIcon.classList.add("ri-pause-line");
    videoIcon.classList.remove("ri-play-line");
  } else {
    // Pause video
    videoFile.pause();
    // We change the icon
    videoIcon.classList.remove("ri-pause-line");
    videoIcon.classList.add("ri-play-line");
  }
}
videoButton.addEventListener("click", playPause);

function finalVideo() {
  // Video ends, icon change
  videoIcon.classList.remove("ri-pause-line");
  videoIcon.classList.add("ri-play-line");
}
// ended, when the video ends
videoFile.addEventListener("ended", finalVideo);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  // reset: true,
});

sr.reveal(
  `.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,
  {
    origin: "top",
    interval: 100,
  }
);

sr.reveal(
  `.about__data, 
           .video__description,
           .subscribe__description`,
  {
    origin: "left",
  }
);

sr.reveal(
  `.about__img-overlay, 
           .video__content,
           .subscribe__form`,
  {
    origin: "right",
    interval: 100,
  }
);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ra-lion";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ra-snake" : "ra-lion";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ra-snake " ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

function submit() {
  var gryffindor = 0;
  var slytherin = 0;
  var hufflepuff = 0;
  var ravenclaw = 0;

  var q1 = document.querySelector('input[name="classs"]:checked').value;
  var q2 = document.querySelector('input[name="Spell"]:checked').value;
  var q3 = document.querySelector('input[name="behave"]:checked').value;
  var q4 = document.querySelector('input[name="grow"]:checked').value;
  var q5 = document.querySelector('input[name="position"]:checked').value;

  if (q1 == "gryffindor") {
    gryffindor += 1;
  } else if (q1 == "slytherin") {
    slytherin += 1;
  } else if (q1 == "hufflepuff") {
    hufflepuff += 1;
  } else if (q1 == "ravenclaw") {
    ravenclaw += 1;
  }

  if (q2 == "gryffindor") {
    gryffindor += 1;
  } else if (q2 == "slytherin") {
    slytherin += 1;
  } else if (q2 == "hufflepuff") {
    hufflepuff += 1;
  } else if (q2 == "ravenclaw") {
    ravenclaw += 1;
  }

  if (q3 == "gryffindor") {
    gryffindor += 1;
  } else if (q3 == "slytherin") {
    slytherin += 1;
  } else if (q3 == "hufflepuff") {
    hufflepuff += 1;
  } else if (q3 == "ravenclaw") {
    ravenclaw += 1;
  }

  if (q4 == "gryffindor") {
    gryffindor += 1;
  } else if (q4 == "slytherin") {
    slytherin += 1;
  } else if (q4 == "hufflepuff") {
    hufflepuff += 1;
  } else if (q4 == "ravenclaw") {
    ravenclaw += 1;
  }

  if (q5 == "gryffindor") {
    gryffindor += 1;
  } else if (q5 == "slytherin") {
    slytherin += 1;
  } else if (q5 == "hufflepuff") {
    hufflepuff += 1;
  } else if (q5 == "ravenclaw") {
    ravenclaw += 1;
  }

  if (gryffindor * 20 > 50) {
    swal({
      title: "Sorting in Progress!",
      icon: "https://cdna.artstation.com/p/assets/images/images/019/078/702/original/blake-johnson-animation-test.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 4000,
    }).then(function () {
      swal({
        title: "Gryffindor!",
        icon: "https://64.media.tumblr.com/077bfe0596e2c71c2413e87c8ef780f9/tumblr_n6tbrlO2lD1si4nf1o1_500.gifv",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  }
  if (slytherin * 20 > 50) {
    swal({
      title: "Sorting in Progress!",
      icon: "https://cdna.artstation.com/p/assets/images/images/019/078/702/original/blake-johnson-animation-test.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 4000,
    }).then(function () {
      swal({
        title: "Slytherin!",
        icon: "https://64.media.tumblr.com/2c030abd21f2b35e52f4b4a41c19de4b/tumblr_n6psdwCn5s1si4nf1o1_500.gifv",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  }
  if (ravenclaw * 20 > 50) {
    swal({
      title: "Sorting in Progress!",
      icon: "https://cdna.artstation.com/p/assets/images/images/019/078/702/original/blake-johnson-animation-test.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 4000,
    }).then(function () {
      swal({
        title: "Ravenclaw!",
        icon: "https://64.media.tumblr.com/4be005fe1f78642a15561f71135c1a1e/tumblr_n6uav8viy01si4nf1o1_500.gifv",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  }

  if (
    ravenclaw * 20 < 50 &&
    hufflepuff * 20 > 10 &&
    slytherin * 20 < 50 &&
    gryffindor * 20 < 50
  ) {
    swal({
      title: "Sorting in Progress!",
      icon: "https://cdna.artstation.com/p/assets/images/images/019/078/702/original/blake-johnson-animation-test.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 4000,
    }).then(function () {
      swal({
        title: "Hufflepuff!",
        icon: "https://64.media.tumblr.com/5503faf267e88c69166ffa8734406d8e/tumblr_n6rmm7J48f1si4nf1o1_500.gifv",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  }

  if (
    ravenclaw * 20 < 50 &&
    hufflepuff * 20 < 30 &&
    slytherin * 20 < 50 &&
    gryffindor * 20 < 50
  ) {
    swal({
      title: "Sorting in Progress!",
      icon: "https://cdna.artstation.com/p/assets/images/images/019/078/702/original/blake-johnson-animation-test.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 4000,
    }).then(function () {
      swal({
        title: "Ravenclaw!",
        icon: "https://64.media.tumblr.com/4be005fe1f78642a15561f71135c1a1e/tumblr_n6uav8viy01si4nf1o1_500.gifv",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  }
  if (hufflepuff * 20 > 50) {
    swal({
      title: "Sorting in Progress!",
      icon: "https://cdna.artstation.com/p/assets/images/images/019/078/702/original/blake-johnson-animation-test.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 4000,
    }).then(function () {
      swal({
        title: "Hufflepuff!",
        icon: "https://64.media.tumblr.com/5503faf267e88c69166ffa8734406d8e/tumblr_n6rmm7J48f1si4nf1o1_500.gifv",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  }
}

function patronuss() {
  var HelloDog = 0;
  var SlapDog = 0;
  var WiggleCat = 0;
  var Scream = 0;
  var TwerkPig = 0;
  var Dragon = 0;
  var InfinitySeal = 0;
  var LaughLion = 0;
  var BudgetLion = 0;

  var q1 = document.querySelector('input[name="describe"]:checked').value;
  var q2 = document.querySelector('input[name="eyes"]:checked').value;
  var q3 = document.querySelector('input[name="born"]:checked').value;
  var q4 = document.querySelector('input[name="yourself"]:checked').value;
  var q5 = document.querySelector('input[name="fear"]:checked').value;
  var q6 = document.querySelector('input[name="chest"]:checked').value;
  var q7 = document.querySelector('input[name="crossroads"]:checked').value;
  {
    if (q1 == "HelloDog") {
      HelloDog += 1;
    } else if (q1 == "SlapDog") {
      SlapDog += 1;
    } else if (q1 == "WiggleCat") {
      WiggleCat += 1;
    } else if (q1 == "Scream") {
      Scream += 1;
    } else if (q1 == "TwerkPig") {
      TwerkPig += 1;
    } else if (q1 == "InfinitySeal") {
      InfinitySeal += 1;
    } else if (q1 == "LaughLion") {
      LaughLion += 1;
    } else if (q1 == "BudgetLion") {
      BudgetLion += 1;
    } else if (q1 == "Dragon") {
      Dragon += 1;
    }

    if (q2 == "HelloDog") {
      HelloDog += 1;
    } else if (q2 == "SlapDog") {
      SlapDog += 1;
    } else if (q2 == "WiggleCat") {
      WiggleCat += 1;
    } else if (q2 == "Scream") {
      Scream += 1;
    } else if (q2 == "TwerkPig") {
      TwerkPig += 1;
    } else if (q2 == "InfinitySeal") {
      InfinitySeal += 1;
    } else if (q2 == "LaughLion") {
      LaughLion += 1;
    } else if (q2 == "BudgetLion") {
      BudgetLion += 1;
    } else if (q2 == "Dragon") {
      Dragon += 1;
    }

    if (q3 == "HelloDog") {
      HelloDog += 1;
    } else if (q3 == "SlapDog") {
      SlapDog += 1;
    } else if (q3 == "WiggleCat") {
      WiggleCat += 1;
    } else if (q3 == "Scream") {
      Scream += 1;
    } else if (q3 == "TwerkPig") {
      TwerkPig += 1;
    } else if (q3 == "InfinitySeal") {
      InfinitySeal += 1;
    } else if (q3 == "LaughLion") {
      LaughLion += 1;
    } else if (q3 == "BudgetLion") {
      BudgetLion += 1;
    } else if (q3 == "Dragon") {
      Dragon += 1;
    }

    if (q4 == "HelloDog") {
      HelloDog += 1;
    } else if (q4 == "SlapDog") {
      SlapDog += 1;
    } else if (q4 == "WiggleCat") {
      WiggleCat += 1;
    } else if (q4 == "Scream") {
      Scream += 1;
    } else if (q4 == "TwerkPig") {
      TwerkPig += 1;
    } else if (q4 == "InfinitySeal") {
      InfinitySeal += 1;
    } else if (q4 == "LaughLion") {
      LaughLion += 1;
    } else if (q4 == "BudgetLion") {
      BudgetLion += 1;
    } else if (q4 == "Dragon") {
      Dragon += 1;
    }

    if (q5 == "HelloDog") {
      HelloDog += 1;
    } else if (q5 == "SlapDog") {
      SlapDog += 1;
    } else if (q5 == "WiggleCat") {
      WiggleCat += 1;
    } else if (q5 == "Scream") {
      Scream += 1;
    } else if (q5 == "TwerkPig") {
      TwerkPig += 1;
    } else if (q5 == "InfinitySeal") {
      InfinitySeal += 1;
    } else if (q5 == "LaughLion") {
      LaughLion += 1;
    } else if (q5 == "BudgetLion") {
      BudgetLion += 1;
    } else if (q5 == "Dragon") {
      Dragon += 1;
    }

    if (q6 == "HelloDog") {
      HelloDog += 1;
    } else if (q6 == "SlapDog") {
      SlapDog += 1;
    } else if (q6 == "WiggleCat") {
      WiggleCat += 1;
    } else if (q6 == "Scream") {
      Scream += 1;
    } else if (q6 == "TwerkPig") {
      TwerkPig += 1;
    } else if (q6 == "InfinitySeal") {
      InfinitySeal += 1;
    } else if (q6 == "LaughLion") {
      LaughLion += 1;
    } else if (q6 == "BudgetLion") {
      BudgetLion += 1;
    } else if (q6 == "Dragon") {
      Dragon += 1;
    }

    if (q7 == "HelloDog") {
      HelloDog += 1;
    } else if (q7 == "SlapDog") {
      SlapDog += 1;
    } else if (q7 == "WiggleCat") {
      WiggleCat += 1;
    } else if (q7 == "Scream") {
      Scream += 1;
    } else if (q7 == "TwerkPig") {
      TwerkPig += 1;
    } else if (q7 == "InfinitySeal") {
      InfinitySeal += 1;
    } else if (q7 == "LaughLion") {
      LaughLion += 1;
    } else if (q7 == "BudgetLion") {
      BudgetLion += 1;
    } else if (q7 == "Dragon") {
      Dragon += 1;
    }
  }

  if (HelloDog == 3) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/cat.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  } else if (WiggleCat >= 2 && Dragon == 0) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/dolphin.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  } else if (WiggleCat >= 2 && Dragon == 1) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/stag.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  } else if (BudgetLion == 3) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({

        icon: "https://s5.gifyu.com/images/lion.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  } else if (LaughLion == 3) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/hare.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  } else if (TwerkPig == 3) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/shark.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  } else if (InfinitySeal == 3) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/thres.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  } else if (SlapDog == 3) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/king.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  } else if (Scream == 3) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/unicorn.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  }
  

  if (HelloDog >= 2) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/cat.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  } else if (WiggleCat >= 2 && Dragon == 0) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/dolphin.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  } else if (WiggleCat >= 2 && Dragon == 1) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/stag.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  } else if (BudgetLion >= 2) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/lion.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  } else if (LaughLion >= 2) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/hare.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  } else if (TwerkPig >= 2) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/shark.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  } else if (InfinitySeal >= 2) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/thres.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  } else if (SlapDog >= 2) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/king.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  } else if (Scream >= 2) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/unicorn.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  } else if (HelloDog < 1 && WiggleCat < 1 && BudgetLion < 1) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/swan.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  } else if (LaughLion < 1 && TwerkPig < 1) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/dragon.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  } else if (BudgetLion < 2 && SlapDog < 2 && InfinitySeal < 2 && Scream < 2) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/hippogriff.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  } else if (
    HelloDog < 2 &&
    WiggleCat < 2 &&
    BudgetLion < 2 &&
    LaughLion < 2 &&
    TwerkPig < 2 &&
    BudgetLion < 2 &&
    SlapDog < 2 &&
    InfinitySeal < 2 &&
    Scream < 2 
  ) {
    swal({
      title: "Revealing Patronus...",
      icon: "http://25.media.tumblr.com/tumblr_mbhmloqINO1ri1mxoo1_500.gif",
      imageAlt: "Custom image",
      buttons: false,
      timer: 1500,
    }).then(function () {
      swal({
        icon: "https://s5.gifyu.com/images/hippogriff.gif",
        imageAlt: "Custom image",
        buttons: false,
      });
    });
  }
}

function bog() {
  var dementor = 0;
  var Voldemort = 0;
  var height = 0;
  var dark = 0;

  var q1 = document.querySelector('input[name="classs"]:checked').value;
  var q2 = document.querySelector('input[name="Spell"]:checked').value;
  var q3 = document.querySelector('input[name="behave"]:checked').value;
  var q5 = document.querySelector('input[name="position"]:checked').value;
  var q6 = document.querySelector('input[name="Wierd"]:checked').value;

  if (q1 == "dementor") {
    dementor += 1;
  } else if (q1 == "Voldemort") {
    Voldemort += 1;
  } else if (q1 == "height") {
    height += 1;
  } else if (q1 == "dark") {
    dark += 1;
  }

  if (q2 == "dementor") {
    dementor += 1;
  } else if (q2 == "Voldemort") {
    Voldemort += 1;
  } else if (q2 == "height") {
    height += 1;
  } else if (q2 == "dark") {
    dark += 1;
  }

  if (q3 == "dementor") {
    dementor += 1;
  } else if (q3 == "Voldemort") {
    Voldemort += 1;
  } else if (q3 == "height") {
    height += 1;
  } else if (q3 == "dark") {
    dark += 1;
  }

  if (q5 == "dementor") {
    dementor += 1;
  } else if (q5 == "Voldemort") {
    Voldemort += 1;
  } else if (q5 == "height") {
    height += 1;
  } else if (q5 == "dark") {
    dark += 1;
  }

  if (q6 == "dementor") {
    dementor += 1;
  } else if (q6 == "Voldemort") {
    Voldemort += 1;
  } else if (q6 == "height") {
    height += 1;
  } else if (q6 == "dark") {
    dark += 1;
  }
  

  if (dementor * 20 > 50) {
    swal({
      title: "Dementors",
      text: "Your boggart would take the form of Dementors!",
      icon: "https://i.pinimg.com/originals/16/1a/f0/161af08eb8cdfccb7682517c88d041c2.gif",
      imageAlt: "Custom image",
      buttons: {
        text: "Riddikulus",
      },
    }).then(function () {
      swal({
        icon: "https://data.whicdn.com/images/189727288/original.gif",
        imageAlt: "Custom image",
        timer: 3000,
        buttons: false,
      });
    });
  }

  if (Voldemort * 20 > 50) {
    swal({
      title: "Voldemort",
      text: "Your boggart would take the form of Voldemort!",
      icon: "https://img.wattpad.com/447b078a424bf3259ffe9508927e0b04c6c15bd2/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f314a626b393147387a45586858673d3d2d3630313530363437372e313536346437306565373734393731373430313231323932393235392e676966",
      imageAlt: "Custom image",
      buttons: {
        text: "Riddikulus",
      },
    }).then(function () {
      swal({
        icon: "/assets/img/volde.gif",
        imageAlt: "Custom image",
        timer: 3000,
        buttons: false,
      });
    });
  }

  if (height * 20 > 50) {
    swal({
      title: "Height",
      text: "Your boggart would take the form of Height!",
      icon: "https://64.media.tumblr.com/4e64267311a51cd7ac208e370e199858/tumblr_n2rtkenPiF1tw44xdo1_500.gifv",
      imageAlt: "Custom image",
      buttons: {
        text: "Riddikulus",
      },
    }).then(function () {
      swal({
        icon: "https://thumbs.gfycat.com/BiodegradableSmugGeese-size_restricted.gif",
        imageAlt: "Custom image",
        timer: 3000,
        buttons: false,
      });
    });
  }

  if (dark * 20 > 50) {
    swal({
      title: "Dark",
      text: "Your boggart would take the form of Darkness!",
      icon: "https://i.gifer.com/3sEB.gif",
      imageAlt: "Custom image",
      buttons: {
        text: "Riddikulus",
      },
    }).then(function () {
      swal({
        icon: "https://i.redd.it/g332nv274vf51.gif",
        imageAlt: "Custom image",
        timer: 3000,
        buttons: false,
      });
    });
  }

  if (
    dark * 20 < 50 &&
    height * 20 < 50 &&
    dementor * 20 < 50 &&
    Voldemort * 20 < 50
  ) {
    swal({
      title: "Scary Clown",
      text: "Your boggart would take the form of Scary Clown!",
      icon: "http://orig06.deviantart.net/b68d/f/2017/253/c/f/it_2017_pennywise_jumpscare___gif_code__by_dafominanimat-dbmzj6k.gif",
      imageAlt: "Custom image",
      buttons: {
        text: "Riddikulus",
      },
    }).then(function () {
      swal({
        icon: "https://i.gifer.com/3YJ.gif",
        imageAlt: "Custom image",
        buttons: false,
        timer: 3000,
      });
    });
  }

  
  if (
    dark * 20 == 40 &&
    height * 20 == 40 &&
    dementor * 20 < 50 &&
    Voldemort * 20 < 50
  ) {
    swal({
      title: "BASILISK",
      text: "Your boggart would take the form of Basilisk!",
      icon: "https://data.whicdn.com/images/201143518/original.gif",
      imageAlt: "Custom image",
      buttons: {
        text: "Riddikulus",
      },
    }).then(function () {
      swal({
        icon: "http://media1.giphy.com/media/FV8nzuvp7pcHu/giphy.gif?w=144",
        imageAlt: "Custom image",
        buttons: false,
        timer: 3000,
      });
    });
  }

  if (
    dark * 20 < 50 &&
    height * 20 < 30 &&
    dementor * 20 < 50 &&
    Voldemort * 20 < 50
  ) {
    swal({
      title: "Spiders",
      text: "Your boggart would take the form of Spider!",
      icon: "https://i.pinimg.com/originals/2c/54/99/2c549919fbe6f8841f562fe6643110fb.gif",
      imageAlt: "Custom image",
      buttons: {
        text: "Riddikulus",
      },
    }).then(function () {
      swal({
        icon: "https://c.tenor.com/G3dgtWqmNCUAAAAC/spider-idk.gif",
        imageAlt: "Custom image",
        buttons: false,
        timer: 3000,
      });
    });
  }
}
