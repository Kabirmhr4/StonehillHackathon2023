// Get the parallax section and background
const parallax = document.querySelector('.parallax');
const bg = document.querySelector('.parallax-bg');

// Add an event listener to listen for window scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  let scrollPosition = window.pageYOffset;

  // Apply the parallax effect to the background
  bg.style.transform = `translateY(-${scrollPosition * 0.5}px)`;
});
