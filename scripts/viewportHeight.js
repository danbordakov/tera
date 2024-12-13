// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.getElementById('testtest').textContent = vh * 100;
});

// document.getElementById('testtest').textContent = vh;
// insert.innerHTML = 'wow' + vh;