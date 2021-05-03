const form = document.querySelector('.formToDos');
const input = form.querySelector('input');

const mission = document.querySelector('.mission');
const tasks = document.querySelector('.tasks');
const taskList = tasks.querySelector('ul');

let taskArr = [];

// delete 기능 
function handleDelClick(event){
  const li = event.target.parentNode;
  taskList.removeChild(li);
  console.log(typeof li.id);
  // console.log(type of (taskArr[0]).id);

  const newArr = taskArr.filter((task)=>{
    return parseInt(li.id) !== task.id;
  });

  console.log(taskArr);
  console.log(newArr);
  taskArr = newArr;
  localStorage.setItem('TASK',JSON.stringify(taskArr));
}

// localStroge에 저장하기
function saveTask(task){
  const idNum = taskArr.length+1;
  const taskObj = {
    id : idNum,
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
  li.id = taskArr.length;
  const sucBtn = document.createElement('button');
  const delBtn = document.createElement('button');
  delBtn.innerHTML = '🗑️';
  sucBtn.innerHTML = '✅';

  delBtn.classList.add('button');
  delBtn.addEventListener('click', handleDelClick);
  sucBtn.classList.add('button');
  li.appendChild(sucBtn);
  li.appendChild(delBtn);
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
  const parsedArr = JSON.parse(localStorage.getItem('TASK'));  
  if(parsedArr === null){
    taskArr = [];
  }else{    
    parsedArr.forEach(task => {
        saveTask(task.task);
        makeTask(task.task);
      });    
  }  
  input.addEventListener('change', handleSubmit);
}
init();

