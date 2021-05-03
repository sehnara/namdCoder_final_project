<<<<<<< HEAD
const inputName = document.querySelector('.inputName');

const div = document.querySelector('.mission');

// name p 태그 생성
function createName(name){
    const p = document.createElement('p');
    p.innerHTML = `Hello! ${name}.`;

    p.classList.add('name')
    div.appendChild(p);
    inputName.remove();    
}

function handleChange(){
    const name = inputName.value;
    inputName.value = '';
    // lacalStorage에 name 저장
    localStorage.setItem('userName',name);
    createName(name);
}

function init(){
    const localName = localStorage.getItem('userName');
    if(localName!==null){
        createName(localName);
    }else{
        inputName.addEventListener('change',handleChange);
    }    
}
init();
=======
const inputName = document.querySelector('.inputName');

const div = document.querySelector('.mission');

// name p 태그 생성
function createName(name){
    const p = document.createElement('p');
    p.innerHTML = `Hello! ${name}.`;

    p.classList.add('name')
    div.appendChild(p);
    inputName.remove();    
}

function handleChange(){
    const name = inputName.value;
    inputName.value = '';
    // lacalStorage에 name 저장
    localStorage.setItem('userName',name);
    createName(name);
}

function init(){
    const localName = localStorage.getItem('userName');
    if(localName!==null){
        createName(localName);
    }else{
        inputName.addEventListener('change',handleChange);
    }    
}
init();
>>>>>>> de79b9aa56d8b8453508154fa070d6598dec16b1
