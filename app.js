const board = document.querySelector('#board');
const colors = ['#ee82ee', '#ff00ff', '#c71585', '#9370db', '#9932cc', '#4b0082', '#8b008b', '#ba55d3', '#d8bfd8', '#ff1493', '#ff69b4', '#db7093']
const SQUARES_NUMBER = 600;

for(let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('pointerover', () => 
    setColor(square));

  square.addEventListener('pointerleave', () => 
   removeColor(square));
  
  board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 30px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index];
}
