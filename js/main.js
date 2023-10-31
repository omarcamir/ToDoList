let taskName = document.querySelector("#taskName");
let addTask = document.querySelector("#addTask");
let list = document.querySelector(".list");
let clear = document.querySelector("#clear");


addTask.addEventListener("click", () => {
    if (taskName.value != "") {
      addNewTask();
      taskName.value = "";
    }
  });


let addNewTask = function() {

    let li = document.createElement("li");
    let taskP = document.createElement("p");

    let btnsDiv = document.createElement("div");
    btnsDiv.className = "btnsDiv";

    let completedInp = document.createElement("input");
    completedInp.type = "submit";
    completedInp.value = "completed";
    completedInp.className = "completed";

    let deleteInp = document.createElement("input");
    deleteInp.type = "submit";
    deleteInp.value = "delete";
    deleteInp.className = "delete";

    list.appendChild(li);
    li.appendChild(taskP);
    li.appendChild(btnsDiv);
    btnsDiv.appendChild(completedInp);
    btnsDiv.appendChild(deleteInp);
    taskP.innerText = taskName.value;
    taskP.value = " ";


    deleteInp.addEventListener("click", function() {
        li.remove();
    })

    completedInp.addEventListener("click", function() {
        li.style.backGroundColor = 'rgb(85, 86, 88)';

        taskP.style.textDecoration = "line-through";
        completedInp.setAttribute("disabled", "disabled");
        completedInp.value= "Done";
        completedInp.style.cursor = "text";
    })
    
}
clear.addEventListener("click", function() {
  list.innerHTML = "";
})


