
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const btnStart = document.querySelector('button[data-start]');
  const btnStop = document.querySelector('button[data-stop]');
  const body = document.querySelector('body');
  const colorValSpan = document.querySelector('.color');

  let timerId = null;

  btnStart.addEventListener('click', () => {
    timerId = setInterval(()=>{
        body.style.backgroundColor = getRandomHexColor();
        body.style.color = getRandomHexColor();
    },1000) ;
    btnStart.disabled = true;
  });

  btnStop.addEventListener('click', () => {
    clearInterval(timerId) ;
    body.style.color = getRandomHexColor();
    btnStart.disabled = false;
  });
