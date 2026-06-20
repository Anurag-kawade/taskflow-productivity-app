function openFeatures(){
    let allElem = document.querySelectorAll(".elem");
    let fullElemPage = document.querySelectorAll(".fullElem");
    let allBtn = document.querySelectorAll(".back");

    allElem.forEach(function(elem){ 
        elem.addEventListener("click",function(){
            fullElemPage[elem.id].style.display = "block";
        })
    })

    allBtn.forEach(function(btn){
        btn.addEventListener("click",function(){
            fullElemPage[btn.id].style.display = "none";
        })
    })
}

openFeatures();


let form = document.querySelector("#form");
let taskInput = document.querySelector("#form input");
let detailsInput = document.querySelector("#form textarea");
let checkBox = document.querySelector(".fullElem.todo-list-fullpage .todo-container .left form #checkbox #check-box");

let currentTask = [
    {
        task : "Mandir Jao",
        details : "Hanuman Ji Vale",
        imp : true,
    },
    {
        task : "Recording Karo",
        details : "Cohort ki",
        imp : true,
    },
    {
        task : "Khana Khao",
        details : "2 baje",
        imp : false,
    },
];

function renderTask(){
    let allTask = document.querySelector(".fullElem.todo-list-fullpage .todo-container .right");

    let sum = '';

    currentTask.forEach(function(elem){
        sum += `<div class="tasks">
        <h5>${elem.task} <span class="${elem.imp}">IMP</span></h5>
        <button>Mark as Completed</button>
        </div>`
    })

    allTask.innerHTML = sum;
}
renderTask();

form.addEventListener("submit",function(dets){
    dets.preventDefault();   
    // console.log(taskInput.value);
    // console.log(detailsInput.value);
    // console.log(checkBox.checked);

    currentTask.push({task:taskInput.value,details:detailsInput.value,imp:checkBox.checked});
    taskInput.value = '';
    detailsInput.value = '';
    checkBox.checked = false;

    renderTask();
    // console.log(currentTask);
    
})

