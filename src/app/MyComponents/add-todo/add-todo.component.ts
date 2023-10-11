import { Component,Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent
{
  title!: string;
  desc!: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor ()
  { }

  onSubmit()
  {
    if((this.title.length == 0) || (this.desc.length == 0))
    {
      window.alert("Input field should not be empty");
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Enter Valid Task!',
      });
    }
    else
    {
      const todo = {
        title: this.title,
        desc: this.desc,
        active: true
      }
      Swal.fire(
        'Added',
        'New Task Added Successfully',
        'success'
      );
      this.todoAdd.emit(todo);
    }
  }
}
