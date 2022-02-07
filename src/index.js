document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#create-task-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      createDescription(e.target["new-task-description"].value);
      //function createDescription()
    });
});
function createDescription(newTask) {
  const tasks = document.querySelector("#tasks");
  const p = document.createElement("p");
  const btn = document.createElement("button");
  btn.innerText = "x";
  p.innerText = `${newTask}  `;
  p.appendChild(btn);
  tasks.append(p);
  document.querySelector("#create-task-form").reset();
  btn.addEventListener("click", function (e) {
    e.target.parentNode.remove();
  });
}
