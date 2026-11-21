const button = document.querySelector(".open-btn");

const roofDove = document.querySelector(".dove");
const flyingDove = document.querySelector(".flying-dove");
const carriedLetter = document.querySelector(".bird-letter");
const fallingLetter = document.querySelector(".falling-letter");

button.addEventListener('click', () => {

    roofDove.style.display = "none";

    flyingDove.classList.add('fly-in');

    setTimeout(() => {

        birdLetter.style.opacity = "0";

        fallingLetter.classList.add('drop');

    }, 1800);

    setTimeout(() => {

        fallingLetter.classList.add('fade-letter');

        deskLetter.style.opacity = "1";

    }, 3500);

    setTimeout(() => {

        flyingDove.classList.remove('fly-in');
        flyingDove.classList.add('fly-out');

    }, 4200);

    setTimeout(() => {

        flyingDove.style.opacity = "0";

        roofDove.style.display = "block";

    }, 6500);

});

const deskLetter =
document.querySelector(".desk-letter");

deskLetter.addEventListener("click", () => {

    window.location.href = "letter.html";

});