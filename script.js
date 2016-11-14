(function() {
  'use strict';

  const grid = document.querySelector('#grid');
  let pixel;
  for (let i = 0; i < 1776; i++) {
    pixel = document.createElement('div');
    pixel.classList.add('pixel')
    grid.appendChild(pixel);
  }
  grid.addEventListener('click', (e) => {
    e.target.classList.add('red')
  });
})();
