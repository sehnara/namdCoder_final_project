const body = document.querySelector('body');

function changeBG(){
  const bgNum = Math.floor(Math.random()*3)+1;  
  const image = new Image();
  image.src = `${bgNum}.jpg`;  
  image.classList.add('bgImage');
  body.appendChild(image);

}
changeBG();

