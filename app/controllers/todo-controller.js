import TodoService from "../services/todo-service.js";
import store from "../store.js";
import Todo from "../models/todo.js"

//TODO Create the render function
function _drawTodos() {

  let todos = store.State.todos
  let todoElem = document.getElementById("task-list")
  let template = `<li class="list-group-item bg-dark text-light text-center"> Total Todos Stored: ${store.State.todos.length} </li>`

  todos.forEach(t => {
    template += t.todoTemplate
  })

  todoElem.innerHTML = template

}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers

    store.subscribe("todos", _drawTodos)

    TodoService.getTodos();
  }

  async addTodo(e) {
    e.preventDefault();
    let form = e.target;
    let todo = {
      description: form.description.value
    };
    try {
      await TodoService.addTodoAsync(todo);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  async toggleTodoStatus(todoId) {
    try {
      await TodoService.toggleTodoStatusAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  async removeTodo(todoId) {
    try {
      await TodoService.removeTodoAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }
}
