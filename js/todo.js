const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

let todos= [];
const TODOS_KEY = "todo";
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}
function deleteToDo(event){
    const li = event.target.parentElement;
    todos = todos.filter((todo)=> todo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}
function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value;
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDoInput.value = "";
    todos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
function paintToDo(newTodo){
    const span = document.createElement("span");
    const li = document.createElement("li");
    const button = document.createElement("button");

    button.type = "button";
    button.addEventListener("click",deleteToDo);
    button.innerText = "❌";
    span.innerText = newTodo.text;
    li.id = newTodo.id;

    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos =JSON.parse(savedToDos);
    todos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}