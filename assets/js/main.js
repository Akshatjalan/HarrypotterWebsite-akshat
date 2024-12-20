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
document.addEventListener("DOMContentLoaded", () => {
  const videoFile = document.getElementById("video-file");
  const videoButton = document.getElementById("video-button");
  const videoIcon = document.getElementById("video-icon");

  if (videoFile && videoButton && videoIcon) {
    function playPause() {
      if (videoFile.paused) {
        videoFile.play();
        videoIcon.classList.add("ri-pause-line");
        videoIcon.classList.remove("ri-play-line");
      } else {
        videoFile.pause();
        videoIcon.classList.remove("ri-pause-line");
        videoIcon.classList.add("ri-play-line");
      }
    }
    videoButton.addEventListener("click", playPause);

    function finalVideo() {
      videoIcon.classList.remove("ri-pause-line");
      videoIcon.classList.add("ri-play-line");
    }

    videoFile.addEventListener("ended", finalVideo);
  }
});

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

//Sorting quiz function
function submit() {
  const houses = {
    gryffindor: 0,
    slytherin: 0,
    hufflepuff: 0,
    ravenclaw: 0,
  };

  // Gather quiz answers dynamically
  const questions = ["classs", "Spell", "behave", "grow", "position"];

  let allAnswered = true;

  // Check if all questions are answered
  questions.forEach((question) => {
    const answer = document.querySelector(`input[name="${question}"]:checked`);
    if (!answer) {
      allAnswered = false; // If any question is not answered, set this to false
    } else {
      houses[answer.value]++; // Add the value to the corresponding house
    }
  });

  // If not all questions are answered, show an alert and return
  if (!allAnswered) {
    swal({
      title: "Please answer all questions!",
      icon: "warning",
      buttons: true,
    });
    return;
  }

  // Calculate the maximum score and handle ties
  const maxScore = Math.max(...Object.values(houses));
  const topHouses = Object.keys(houses).filter(
    (house) => houses[house] === maxScore
  );

  // Randomize the house in case of a tie
  const chosenHouse = topHouses[Math.floor(Math.random() * topHouses.length)];

  // Display loading and final house result
  swal({
    title: "Sorting in Progress!",
    icon: "assets/img/Sorting/sorting.gif",
    imageAlt: "Sorting hat animation",
    buttons: false,
    timer: 4000,
  }).then(() => {
    const houseData = {
      gryffindor: {
        title: "Gryffindor!",
        icon: "assets/img/Sorting/griff.webp",
      },
      slytherin: {
        title: "Slytherin!",
        icon: "assets/img/Sorting/slytherin.webp",
      },
      hufflepuff: {
        title: "Hufflepuff!",
        icon: "assets/img/Sorting/hufflepuff.webp",
      },
      ravenclaw: {
        title: "Ravenclaw!",
        icon: "assets/img/Sorting/Ravenclaw.webp",
      },
    };

    const { title, icon } = houseData[chosenHouse];
    swal({
      title,
      icon,
      imageAlt: `Welcome to ${chosenHouse}`,
      buttons: false,
    });
  });
}

//Patronus quiz function
function patronuss() {
  const options = {
    cat: 0,
    dragon: 0,
    hippogriff: 0,
    hyena: 0,
    legendaryDoe: 0,
    lion: 0,
    moonOwl: 0,
    occamy: 0,
    orca: 0,
    owl: 0,
    rarePhoenix: 0,
    rareStag: 0,
    seal: 0,
    snake: 0,
    stag: 0,
    thestral: 0,
    whiteDog: 0,
  };

  const questions = [
    "describe",
    "blood",
    "wood",
    "artifact",
    "trait",
    "fear",
    "crossroads",
  ];

  questions.forEach((q) => {
    const selectedOption = document.querySelector(
      `input[name="${q}"]:checked`
    )?.value;
    if (selectedOption && options.hasOwnProperty(selectedOption)) {
      options[selectedOption] += 1;
    }
  });

  const patronusImages = {
    cat: "assets/img/Patronus/cat.jpeg",
    dragon: "assets/img/Patronus/dragon.jpeg",
    hippogriff: "assets/img/Patronus/hippogriff.jpeg",
    hyena: "assets/img/Patronus/hyena.jpeg",
    legendaryDoe: "assets/img/Patronus/legendaryDoe.jpeg",
    lion: "assets/img/Patronus/lion.jpeg",
    moonOwl: "assets/img/Patronus/moonOwl.jpeg",
    occamy: "assets/img/Patronus/occamy.jpeg",
    orca: "assets/img/Patronus/orca.jpeg",
    owl: "assets/img/Patronus/owl.jpeg",
    rarePhoenix: "assets/img/Patronus/rarePhoenix.jpeg",
    rareStag: "assets/img/Patronus/rareStag.jpeg",
    seal: "assets/img/Patronus/seal.jpeg",
    snake: "assets/img/Patronus/snake.jpeg",
    stag: "assets/img/Patronus/stag.jpeg",
    thestral: "assets/img/Patronus/thestral.jpeg",
    whiteDog: "assets/img/Patronus/whiteDog.jpeg",
  };

  const determinePatronus = () => {
    const sortedPatronus = Object.entries(options).sort(
      ([, a], [, b]) => b - a
    );
    return sortedPatronus[0][0];
  };

  const patronusKey = determinePatronus();
  const patronusImage = patronusImages[patronusKey];

  swal({
    title: "Revealing Patronus...",
    icon: "assets/img/Patronus/patronusReveal.gif",
    buttons: false,
    timer: 1500,
  }).then(() => {
    swal({
      title: `Your Patronus is: ${patronusKey}`,
      icon: patronusImage,
      buttons: {
        text: "Expecto Patronum",
      },
    });
  });
}

//Boggart quiz function
function bog() {
  const boggarts = {
    dementor: {
      name: "Dementors",
      icon: "assets/img/boggart/dementor.gif",
      secondIcon: "assets/img/creatures/dementor.gif",
      description: "Your boggart would take the form of Dementors!",
    },
    Voldemort: {
      name: "Voldemort",
      icon: "assets/img/boggart/voldemort.gif",
      secondIcon: "assets/img/boggart/volde.gif",
      description: "Your boggart would take the form of Voldemort!",
    },
    height: {
      name: "Height",
      icon: "assets/img/boggart/height.webp",
      secondIcon: "assets/img/boggart/heightRid.gif",
      description: "Your boggart would take the form of heights!",
    },
    dark: {
      name: "Unknown",
      icon: "assets/img/boggart/unknown.gif",
      secondIcon: "assets/img/boggart/unknownRid.gif",
      description: "Your boggart would be Fear of Unknown!",
    },
    spider: {
      name: "Spiders",
      icon: "assets/img/boggart/spiders.gif",
      secondIcon: "assets/img/boggart/spiderRid.webp",
      description: "Your boggart would take the form of Spiders!",
    },
    snake: {
      name: "Death",
      icon: "assets/img/boggart/death.gif",
      secondIcon: "assets/img/boggart/deathRid.gif",
      description: "Your boggart would take the form of Death!",
    },
    water: {
      name: "Deep Water",
      icon: "assets/img/boggart/water.gif",
      secondIcon: "assets/img/boggart/waterRid.gif",
      description: "Your boggart would take the form of Deep Water!",
    },
    clown: {
      name: "Scary Clown",
      icon: "assets/img/boggart/clown.gif",
      secondIcon: "assets/img/boggart/clownRid.gif",
      description: "Your boggart would take the form of a Scary Clown!",
    },
  };

  let scores = {};
  Object.keys(boggarts).forEach((key) => (scores[key] = 0));

  const questions = document.querySelectorAll("input[type='radio']:checked");
  if (questions.length < 8) {
    swal("Incomplete", "Please answer all questions!", "warning");
    return;
  }

  questions.forEach((question) => {
    const value = question.value;
    if (scores.hasOwnProperty(value)) {
      scores[value]++;
    }
  });

  let result = Object.keys(scores).reduce((prev, current) =>
    scores[prev] > scores[current] ? prev : current
  );

  const boggart = boggarts[result];
  swal({
    title: `${boggart.name}`,
    text: boggart.description,
    icon: boggart.icon,
    imageAlt: boggart.name,
    buttons: {
      text: "Riddikulus",
    },
  }).then(function () {
    swal({
      icon: boggart.secondIcon,
      buttons: false,
      timer: 10000,
    });
  });
}

//Wand quiz function
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("submitQuizButton")
    .addEventListener("click", calculateWand);
});

function calculateWand() {
  const quizForm = document.getElementById("quizForm");
  const answers = {
    q1: quizForm.q1.value,
    q2: quizForm.q2.value,
    q3: quizForm.q3.value,
    q4: quizForm.q4.value,
    q5: quizForm.q5.value,
    q6: quizForm.q6.value,
    q7: quizForm.q7.value,
  };

  if (Object.values(answers).includes("")) {
    swal("Incomplete!", "Please answer all questions!", "warning");
    return;
  }

  // Determine the wand's core, wood, and length based on answers
  let score = {
    adventure: 0,
    creativity: 0,
    wisdom: 0,
    leadership: 0,
    bravery: 0,
    kindness: 0,
    ambition: 0,
    loyalty: 0,
    mystery: 0,
  };

  // Count the answers in each category
  for (let question in answers) {
    score[answers[question]] += 1;
  }

  // Logic to assign the wand based on highest score
  let chosenCategory = Object.keys(score).reduce((a, b) =>
    score[a] > score[b] ? a : b
  );

  let core = chosenCategory; // Based on the highest score

  // Define wand models (with added rarity and name)
  const wandModels = {
    adventure: {
      src: "assets/img/Wand/wand1.glb",
      rarity: "Rare",
      name: "Adventurer's Wand",
      core: "Phoenix Feather",
      wood: "Holly",
      length: "11 inches",
    },
    creativity: {
      src: "assets/img/Wand/wand3.glb",
      rarity: "Legendary",
      name: "Creator's Wand",
      core: "Thestral Tail Hair",
      wood: "Elder",
      length: "15 inches",
    },
    wisdom: {
      src: "assets/img/Wand/wand2.glb",
      rarity: "Common",
      name: "Wise One's Wand",
      core: "Phoenix Feather",
      wood: "Yew",
      length: "13.5 inches",
    },
    leadership: {
      src: "assets/img/Wand/wand4.glb",
      rarity: "Epic",
      name: "Leader's Wand",
      core: "Dragon Heartstring",
      wood: "Vine",
      length: "10.5 inches",
    },
    bravery: {
      src: "assets/img/Wand/wand5.glb",
      rarity: "Mythic",
      name: "Braveheart's Wand",
      core: "Griffin Feather",
      wood: "Oak",
      length: "12.5 inches",
    },
    kindness: {
      src: "assets/img/Wand/wand6.glb",
      rarity: "Uncommon",
      name: "Healer's Wand",
      core: "Unicorn Hair",
      wood: "Willow",
      length: "10 inches",
    },
    ambition: {
      src: "assets/img/Wand/wand7.glb",
      rarity: "Rare",
      name: "Ambitious Wand",
      core: "Basilisk Fang",
      wood: "Cherry",
      length: "14 inches",
    },
    loyalty: {
      src: "assets/img/Wand/wand8.glb",
      rarity: "Unique",
      name: "Loyalty's Wand",
      core: "Dragon Heartstring",
      wood: "Birch",
      length: "11.5 inches",
    },
    mystery: {
      src: "assets/img/Wand/wand9.glb",
      rarity: "Legendary",
      name: "Wand of Mysteries",
      core: "Thestral Hair",
      wood: "Ebony",
      length: "13 inches",
    },
    elder: {
      src: "assets/img/Wand/blackelders_wand.glb",
      rarity: "Mythical",
      name: "Elder Wand",
      core: "Thestral Tail Hair",
      wood: "Elder",
      length: "15 inches",
    },
  };

  // const selectedWand = wandModels[core] || {
  //   src: "assets/img/Wand/wand2.glb",
  //   rarity: "Unknown",
  //   name: "Basic Wand",
  // };

  // Random chance of getting the Elder Wand
  const elderWandChance = Math.random() < 0.09; // 9% chance
  const selectedWand = elderWandChance
    ? wandModels["elder"]
    : wandModels[chosenCategory] || {
        src: "assets/img/Wand/elder_wand.glb",
        rarity: "Unknown",
        name: "Basic Wand",
      };

  // Display the wand details using SweetAlert
  swal({
    title: selectedWand.name,
    content: createCustomContent(selectedWand),
    buttons: {
      text: "Accio",
    },
  });
}

// Create custom content to show in SweetAlert for Wand
function createCustomContent(wand) {
  const container = document.createElement("div");

  const coreElement = document.createElement("p");
  coreElement.innerHTML = `<strong>Wand Core: </strong> ${wand.core}`;

  const woodElement = document.createElement("p");
  woodElement.innerHTML = `<strong>Wand Wood: </strong> ${wand.wood}`;

  const lengthElement = document.createElement("p");
  lengthElement.innerHTML = `<strong>Wand Length: </strong> ${wand.length}`;

  const rarityElement = document.createElement("p");
  rarityElement.innerHTML = `<strong>Rarity: </strong> ${wand.rarity}`;

  const modelViewer = document.createElement("model-viewer");
  modelViewer.setAttribute("src", wand.src);
  modelViewer.setAttribute("alt", "3D Wand");
  modelViewer.setAttribute("auto-rotate", "");
  modelViewer.setAttribute("camera-controls", "");
  modelViewer.setAttribute("shadow-intensity", "1");
  modelViewer.style.width = "100%";
  modelViewer.style.height = "400px";
  modelViewer.style.borderRadius = "10px";
  modelViewer.style.backgroundOpacity = "60%";

  modelViewer.style.backgroundImage = "url('assets/img/Wand/wandbg.jpg')";

  container.appendChild(coreElement);
  container.appendChild(woodElement);
  container.appendChild(lengthElement);
  container.appendChild(rarityElement);
  container.appendChild(modelViewer);

  return container;
}
