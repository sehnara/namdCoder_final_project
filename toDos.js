const form = document.querySelector('.formToDos');
const input = form.querySelector('input');

const mission = document.querySelector('.mission');

function getTask(task){ // 위에 추가됨을 띄우고, 2초 후 사라짐
  const p = document.createElement('p');
  p.innerHTML = `'${task}'를 추가하셨습니다.`;
  p.classList.add('task');
  mission.appendChild(p);
  setTimeout(()=>{    
    mission.removeChild(p);    
  },2000);
}

function handleSubmit(){
  const task = input.value;  
  getTask(task);
  input.value = "";
}

input.addEventListener('change', handleSubmit);

