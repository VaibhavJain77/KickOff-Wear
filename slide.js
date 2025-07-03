// alert('This webstore is just a project we dont delivery anything it is just for educational purpose.')

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const track = document.querySelector('.slider-track');

function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  updateSlider();
}


setInterval(() => moveSlide(1), 4000);


updateSlider();
