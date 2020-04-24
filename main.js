addTask = () =>{
    let t = document.getElementById('taskInfo')
    let taskValue = t.value;
    if(taskValue){
        t.value = "";
        addTaskList(taskValue);
    };
}

dragStart = (event) =>{
    ttask = event.target;
    ttask.className += ' holdcls';
    setTimeout(() => (event.target.className = 'invisible'), 0);
}

dragEnd = (event) =>{
event.target.className = 'taskcls';
}

document.getElementById('taskAdd').addEventListener('click',addTask);

addTaskList = (task) =>{
    let liElem = document.createElement("li");
    liElem.classList.add('taskcls');
    liElem.draggable = true;
    liElem.addEventListener('dragstart',dragStart);
    liElem.addEventListener('dragend',dragEnd);

    let taskContent = document.createElement("div");
    taskContent.textContent = task;
    taskContent.classList.add('taskcontentcls')
    let deleteOp = document.createElement("div");
    deleteOp.textContent = 'X';
    deleteOp.classList.add('deletecls');
    deleteOp.addEventListener('click',removeTask);
    liElem.appendChild(taskContent);
    liElem.appendChild(deleteOp);

    let tasksList = document.getElementById('tasksList');
    tasksList.prepend(liElem);
    
}

let ttask;

removeTask = (event) =>{
    let tasksList = event.target.parentNode.parentNode;
    let liElem = event.target.parentNode;
    tasksList.removeChild(liElem);
}

const dragEnter = (event) => {
    // console.log("ENTER");
    event.preventDefault();
    if(event.target.className  === "taskcontainer dropzone list-unstyled") {
        event.target.className += ' hovered';   
    }
}

const dragOver = (event) => {
    // console.log("OVER");
    event.preventDefault();
}

const dragLeave = (event) => {
    // console.log("LEAVE");
    if(event.target.className === "taskcontainer dropzone list-unstyled hovered") {
        event.target.className = "taskcontainer dropzone list-unstyled"
    }
}

const dragDrop = (event) => {
    // console.log("DROP");
    if(event.target.className === "taskcontainer dropzone list-unstyled hovered") {
        event.target.className = "taskcontainer dropzone list-unstyled"
    }
     event.target.append(ttask);
}


const dropzones = document.querySelectorAll('.dropzone');
for(const dropzone of dropzones) {
    dropzone.addEventListener('dragenter', dragEnter);
    dropzone.addEventListener('dragover', dragOver);
    dropzone.addEventListener('dragleave', dragLeave);
    dropzone.addEventListener('drop', dragDrop);
}

