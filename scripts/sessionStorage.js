const preloader = document.querySelector('.preloader');
if (sessionStorage.getItem('user')) {
  preloader.classList.add('preloader_hidden')
}

sessionStorage.setItem('user', true);