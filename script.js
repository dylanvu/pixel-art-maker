(function() {
  'use strict';

  // Create grid
  const grid = document.querySelector('#grid');

  let pixel;
  for (let i = 0; i < 1776 ; i++) {
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

  // Set default color
  let currentColor = 'black';

  // Create current color indicator
  const currentColorIndicator = document.createElement('div');
  const indicatorText = document.createElement('h3');
  indicatorText.innerHTML = "Current color: ";
  currentColorIndicator.classList.add('colorIndicator', currentColor);
  pallete.appendChild(indicatorText)
  pallete.appendChild(currentColorIndicator);

  // Event handlers
  grid.addEventListener('click', (e) => {
    if (e.target.id === 'grid') {
      return;
    }
    if (e.target.classList.item(1) !== currentColor) {
      e.target.classList.remove(e.target.classList.item(1));
      e.target.classList.add(currentColor);
    }
  });

  pallete.addEventListener('click', (e) => {
    if (e.target.id === 'pallete') {
      return;
    }
    if (e.target.classList.item(0) === 'colorIndicator') {
      return;
    }
    currentColorIndicator.classList.remove(currentColor);
    currentColor = e.target.classList.item(1);
    currentColorIndicator.classList.add(currentColor);
  })
})();
