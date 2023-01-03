function show(){
    document.getElementById('addtask').style.display = "block";
}
function hide()
{
    document.getElementById('addtask').style.display = "none";
    document.getElementById("textfile").value = "";
}

function deleteTask(event){
    let del = event.currentTarget.parentNode.parentNode;
    del.removeChild(event.currentTarget.parentNode);
}

// const text = document.getElementById("textfile")
// const add = document.getElementById("addtask")
// const show = document.getElementById("task")
// function submit(){
//     show.innerHTML = text.value;
// }
// function addbutton()
// {
// let con = document.getElementsByTagName("div")[2];

// }



function allowDrop(e){
    e.preventDefault();
}

function drag(e){
    e.dataTransfer.setData("task-card", e.target.id);
}

function drop(e){
    e.preventDefault();
    var data = e.dataTransfer.getData("task-card");
    if(e.target.id === "card-contents"){
        e.target.appendChild(document.getElementById(data));
    }
}

var btn = document.querySelector("#add-task")
let count = 1;

btn.addEventListener('click', () => {
    var openTasks = document.querySelector(".append-task");
    let taskName = document.querySelector("#task-name");
    let taskDesc = document.querySelector("#task-description");
    if(taskName.value === "")
    {
        alert("Please enter a task name!");
        return;
    }
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.setAttribute("id", count);
    taskDiv.draggable = "true";
    taskDiv.ondragstart = drag;


    let taskHead = document.createElement("div");
    taskHead.classList.add("task-heading");

    taskHead.textContent = count +".     "+taskName.value;
    taskName.value= "";
    count++;

    let taskBody = document.createElement("div");
    taskBody.classList.add("task-body");

    taskBody.textContent = taskDesc.value;
    taskDesc.value= "";

    let delbtn = document.createElement("button")
    delbtn.innerHTML = "Delete"
    delbtn.onclick = deleteTask;
    delbtn.classList.add("delete-button");

    taskDiv.appendChild(taskHead);
    taskDiv.appendChild(taskBody);
    taskDiv.appendChild(delbtn)

    openTasks.appendChild(taskDiv);
    



});

