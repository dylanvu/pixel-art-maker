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

  let currentColor = 'black';

  const currentColorIndicator = document.createElement('div');
  currentColorIndicator.classList.add('currentColorIndicator', currentColor)
  pallete.appendChild(currentColorIndicator);

  // Event handlers
  grid.addEventListener('click', (e) => {
    if (e.target.id === 'grid') {
      return;
    }
    console.log(e.target);
    if (e.target.classList.item(1) !== currentColor) {
      e.target.classList.remove(e.target.classList.item(1));
      e.target.classList.add(currentColor);
    }
  });

  pallete.addEventListener('click', (e) => {
    if (e.target.id === 'pallete') {
      return;
    }
    if (e.target.classList.item(0) === 'currentColorIndicator') {
      return;
    }
    currentColorIndicator.classList.remove(e.target.classList.item(1));
    currentColor = e.target.classList.item(1);
    currentColorIndicator.classList.add(currentColor);
  })
})();
