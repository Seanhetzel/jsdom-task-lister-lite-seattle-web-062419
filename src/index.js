document.addEventListener("DOMContentLoaded", () => {

  const list = document.querySelector("ul");

  document.getElementById("create-task-form").addEventListener("submit", function(event){
    event.preventDefault()
    const userInput = event.target.new_task_description.value;
    const newTask = document.createElement("li");
    newTask.textContent = userInput;
    list.appendChild(newTask);

    const deleteButton = document.createElement("button");
    newTask.appendChild(deleteButton);
    deleteButton.addEventListener("click", function(event){
      list.removeChild(newTask)});

    console.log(event)
  });


});
