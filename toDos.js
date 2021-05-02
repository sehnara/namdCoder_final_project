const form = document.querySelector('.formToDos');
const input = form.querySelector('input');

const mission = document.querySelector('.mission');
const tasks = document.querySelector('.tasks');
const taskList = tasks.querySelector('ul');

let taskArr = [];

// localStroge에 저장하기
function saveTask(task){
  const taskObj = {
    task : task
  }  
  taskArr.push(taskObj);
  localStorage.setItem('TASK', JSON.stringify(taskArr));
}

// task list bar 만들기
function makeTask(task){
  const li = document.createElement('li');

  li.innerHTML = `${task}          `;
  li.classList.add('taskList');
  const sucBtn = document.createElement('button');
  const delBtn = document.createElement('button');
  taskList.appendChild(li);
}
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
  saveTask(task);
  makeTask(task);
  

  input.value = "";
}

function init(){
  taskArr = JSON.parse(localStorage.getItem('TASK'));  
  if(taskArr === null){
    taskArr = [];
  }else{    
      taskArr.forEach(task => {
        makeTask(task.task);
      });    
  }  
  input.addEventListener('change', handleSubmit);
}
init();

