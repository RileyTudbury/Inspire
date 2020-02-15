import store from "../store.js";
import Todo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Riley/todos/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get("")
      .then(res => {
        console.log("FROM GET TODOS", res.data.data)
        let todos = res.data.data.map(t => new Todo(t))
        store.commit("todos", todos)
      })
      .catch(err => {
        throw new Error(err)
      })
  }

  addTodoAsync(todo) {
    todoApi.post("", todo)
      .then(res => {
        let newTodo = new Todo(res.data.data)
        let todos = [...store.State.todos, newTodo]
        store.commit("todos", todos)
      })
      .catch(err => {
        console.error(err)
      })
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?

    todoApi
      .delete(todoId)
      .then(res => {
        let todos = store.State.todos.filter(
          t => t._id != todoId)

        store.commit("todos", todos)
      })
      .catch(err => {
        throw new Error(err)
      })
  }
}

const todoService = new TodoService();
export default todoService;
