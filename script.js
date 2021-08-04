document.getElementById('burger-container').onclick = function() {toggleMenu()};

function toggleMenu() {
  document.querySelector('#burger-container').classList.toggle('invisible');
  document.querySelector('#nav').classList.toggle('invisible');
}

