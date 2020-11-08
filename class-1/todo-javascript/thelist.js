const todos = [
    {
        id:1,
        item:"Wake up",
    },
    {
        id:2,
        item:"Eat breakfast",
    },
    {
        id:3,
        item:"Go to work"
    },
];

const todosContainer = document. getElementById("todos-container");

for (let todo of todos) {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const todoTextElement = document.createElement("p");
    todoItem.innerHTML = todo.item;

    todoItem.appendChild(todoTextElement);

    const todoItemButtons = document.createElement("div");
    todoItemButtons.classList.add("todo-items-buttons");

    const completedBtn = document.createElement("button")
    completedBtn.classList.add("completed-Btn");
    completedBtn.innerHTML = "✓";

    todoItemButtons.appendChild(completedBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("deleted-Btn");
    deleteBtn.innerHTML = "x";

    todoItemButtons.appendChild (deteteBtn);

    todoItem.append(todoItemButtons);

};