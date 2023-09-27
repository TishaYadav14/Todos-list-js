const taskInput = document.getElementById("inputBox");
const taskList = document.getElementById("list");

function addingTask(){
    if(taskInput.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskInput.value = '';
    saveData();
}

function changeTasks(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function displayData(){
    taskList.innerHTML = localStorage.getItem("data");
}

document.querySelector('.addItems').addEventListener("submit", addingTask);
taskList.addEventListener('click', changeTasks);
displayData();