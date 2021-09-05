const backgroundImages = ["1.jpg","2.jpg","3.jpg"];

const chosenImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
const body = document.querySelector("body");

body.style.backgroundImage = `url(./background_img/${chosenImage})`;
