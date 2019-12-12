import { observable, action } from 'mobx';

export default class DashboardStore {
  @observable todoList = [];
  @observable id = 0;

  constructor(root) {
    this.root = root;
  }

  @action
  addTodo = (text, color="white") => {
      console.log(this.todoList[this.todoList.length-1])
    this.todoList.push({
        id: this.id++,
        color: color,
        text: text
    })
  }

  @action
  removeTodo = (id) => {
    const todoToRemove = this.todoList.find(obj => obj.id === id);
    this.todoList.remove(todoToRemove);
  }
}