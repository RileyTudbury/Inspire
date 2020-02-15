export default class Todo {

  constructor(data) {
    this._id = data._id || ''
    this.completed = data.completed || false
    this.user = data.user || ''
    this.description = data.description || ''
  }

  get todoTemplate() {
    return `
  
    <li class="list-group-item bg-dark text-light"><button class="btn btn-sm btn-secondary">Complete</button>   ${this.description} <button class="ml-auto btn btn-sm btn-danger" onclick="app.todoController.removeTodo('${this._id}')">
    X</button></li>
  
  `
  }



}