const form = document.querySelector('.formToDos');
const input = form.querySelector('input');

const mission = document.querySelector('.mission');

const tasks = document.querySelector('.tasks');
const pending = tasks.querySelector('.pending');
const finished = tasks.querySelector('.finished');


function handleClick(){
  console.log('df');
}

pending.addEventListener('click', handleClick);
finished.addEventListener('click', handleClick);

// 위에 추가됨을 띄우고, 2초 후 사라짐
function getTask(task){ 
  const p = document.createElement('p');
  p.innerHTML = `'${task}'를 추가하셨습니다.`;
  p.classList.add('task');
  mission.appendChild(p);
  setTimeout(()=>{    
    mission.removeChild(p);    
  },2000);
}

// input 엔터 누르고 값 받아오기
function handleSubmit(){
  const task = input.value;  
  getTask(task);
  input.value = "";
}

input.addEventListener('change', handleSubmit);

