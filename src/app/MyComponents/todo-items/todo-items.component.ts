import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from "./../../Todo";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent 
{
  @Input() todo!: Todo;
  @Input()i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor()
  {

  }
  onClick(todo: Todo)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) 
      {
        this.todoDelete.emit(todo);
        console.log("Onclick has been Trigger");
        Swal.fire(
          'Deleted!',
          'Your task has been deleted.',
          'success'
        )
      }
    })
  }
  onCheckboxClick(todo: Todo)
  {
    console.log(todo);
    this.todoCheckbox.emit(todo);
    console.log(todo);
  }
}
