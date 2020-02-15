export default class Todo {

  constructor(data) {
    this._id = data._id || ''
    this.completed = data.completed || false
    this.user = data.user || ''
    this.description = data.description || ''
  }

  get todoTemplate() {
    return `
  
    <li class="list-group-item bg-dark text-light text-center"> ${this.Button}   ${this.description} <button class="no-bd ml-auto btn btn-sm btn-danger" onclick="app.todoController.removeTodo('${this._id}')"><i class="fas fa-trash-alt"></i></button></li>
  
  `
  }

  get Button() {
    if (this.completed == true) {
      return `<button class="no-bd btn btn-sm btn-success" onclick="app.todoController.toggleTodoStatus('${this._id}')"><i class="fas fa-check-square"></i></button>`
    }
    return `<button class="no-bd btn btn-sm btn-secondary" onclick="app.todoController.toggleTodoStatus('${this._id}')"><i class="far fa-check-square"></i></button>`
  }


}