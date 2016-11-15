(function() {
  'use strict';

  // Create grid
  const grid = document.querySelector('#grid');

  let pixel;
  for (let i = 0; i < 1776; i++) {
    pixel = document.createElement('div');
    pixel.classList.add('pixel');
    grid.appendChild(pixel);
  }

  // Create color pallete
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
    palleteColor = document.createElement('div');
    palleteColor.classList.add('palleteColor', color);
    pallete.appendChild(palleteColor);
  }

  // Event handlers
  let brushColor = 'black';

  grid.addEventListener('click', (e) => {
    if (e.target.id === 'grid') {
      return;
    }
    console.log(e.target);
    e.target.classList.add(brushColor);
  });

  pallete.addEventListener('click', (e) => {
    if (e.target.id === 'pallete') {
      return;
    }
    console.log(e.target);
    brushColor = e.target.classList.item(1);
  })


})();
