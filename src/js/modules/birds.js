export default () => {
  const birds = document.querySelectorAll('.bird');
  birds.forEach((bird, index) => {
    bird.style.animationDelay = `${Math.random() * 10 * Math.sqrt(index)}s`;
    bird.querySelector('.body').style.animationDelay = `${Math.random() * 3}s`;
  });
}