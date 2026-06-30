function openFeatures() {
  let allElem = document.querySelectorAll(".elem");
  let fullElemPage = document.querySelectorAll(".fullElem");
  let allBtn = document.querySelectorAll(".back");

  allElem.forEach(function (elem) {
    elem.addEventListener("click", function () {
      fullElemPage[elem.id].style.display = "block";
    });
  });

  allBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      fullElemPage[btn.id].style.display = "none";
    });
  });
}

openFeatures();

function todoList() {
  let form = document.querySelector("#form");
  let taskInput = document.querySelector("#form input");
  let detailsInput = document.querySelector("#form textarea");
  let checkBox = document.querySelector(
    ".fullElem.todo-list-fullpage .todo-container .left form #checkbox #check-box",
  );

  var currentTask = [];

  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("task list is empty");
  }

  function renderTask() {
    let allTask = document.querySelector(
      ".fullElem.todo-list-fullpage .todo-container .right",
    );

    let sum = "";

    currentTask.forEach(function (elem, idx) {
      sum += `<div class="tasks">
        <h5>${elem.task} <span class="${elem.imp}">IMP</span></h5>
        <button id=${idx}>Mark as Completed</button>
        </div>`;
    });

    allTask.innerHTML = sum;

    let markCompletedBtn = document.querySelectorAll(".tasks button");
    markCompletedBtn.forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentTask.splice(btn.id, 1);
        renderTask();
      });
    });

    localStorage.setItem("currentTask", JSON.stringify(currentTask));
  }
  renderTask();

  form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    currentTask.push({
      task: taskInput.value,
      details: detailsInput.value,
      imp: checkBox.checked,
    });

    renderTask();

    taskInput.value = "";
    detailsInput.value = "";
    checkBox.checked = false;
  });
}

todoList();

var hours = Array.from(
  { length: 24 },
  (_, idx) => `${idx + 1}:00 - ${idx + 2}:00`
);

var wholeDaySum = '';

hours.forEach(function (elem) {
  wholeDaySum +=  `<div class="day-planner-time">
            <p>${elem}</p>
            <input type="text" placeholder="...">
          </div>`;
});
var dayPlanner = document.querySelector(".day-planner");
dayPlanner.innerHTML = wholeDaySum;