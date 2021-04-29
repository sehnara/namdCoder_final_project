const clock = document.querySelector('h1');

function getTime(){
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  clock.innerHTML = `${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes}`;
}

function init(){
  getTime();
  setInterval(getTime,60000);
}

init();


