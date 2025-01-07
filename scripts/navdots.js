const navdots = document.querySelectorAll('.navbar__dot');
const slides = document.querySelectorAll('.slide');
const slideWrapper = document.querySelector('.content');

const n_slides = slides.length;
console.log(n_slides);

visualViewport.addEventListener('resize', () => {
  slideHeight = slides[index_slideCurrent()].offsetHeight;
  console.log(slideHeight);
  updateNavdot()
})

let slideHeight = slideWrapper.offsetHeight;
console.log(slideHeight);


function markNavdot(index) {
  navdots[index].classList.add('navbar__dot_active');
}

function index_slideCurrent() {
  return Math.round( slideWrapper.scrollTop / slideHeight );
}

function updateNavdot() { 
  const c = index_slideCurrent();
  console.log(c);
  if (c>=0 && c<=n_slides) {
  return markNavdot(c)
  } 
}

slideWrapper.addEventListener('scroll', () => {
  navdots.forEach(navdot => {
    navdot.classList.remove('navbar__dot_active');
    updateNavdot();
  });
})


markNavdot(0)

console.log(slideWrapper.scrollTop);

