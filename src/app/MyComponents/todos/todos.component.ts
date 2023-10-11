import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent
{
  title = 'Task Manager';
  localItem: any;
  todos:Todo[];

  constructor()
  {
    this.localItem = localStorage.getItem("todo");
    console.log(this.localItem);
    
    if (this.localItem == null)
    {
      this.todos = [];
    }
    else
    {
      this.todos = JSON.parse(this.localItem)
    }
  }

  deleteTodo(todo: Todo)
  {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo)
  {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo)
  {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todo", JSON.stringify(this.todos));

    console.log(todo);
  }
}
