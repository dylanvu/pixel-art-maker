(function() {
  'use strict';

  const grid = document.querySelector('#grid');

  let pixel;
  for (let i = 0; i < 1776; i++) {
    pixel = document.createElement('div');
    pixel.classList.add('pixel')
    grid.appendChild(pixel);
  }

  const pallete = document.querySelector('#pallete');

  let colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'black',
    'grey',
    'white'
  ];

  let palleteColor;
  for (const color of colors) {
    palleteColor = document.createElement('div')
    palleteColor.classList.add('palleteColor', color);
    pallete.appendChild(palleteColor);
  }

  let brushColor = 'black';

  grid.addEventListener('click', (e) => {
    e.target.classList.add(brushColor)
  });
})();
