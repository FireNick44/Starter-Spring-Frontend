import { Component } from '@angular/core';
import { ToDoList } from '../../models/to-do-list.model'; // Import your ToDoList model
import { ToDoListService } from '../../service/ToDoList/to-do-list.service';

@Component({
  selector: 'app-to-do-list-add',
  templateUrl: './to-do-list-add.component.html',
  styleUrls: ['./to-do-list-add.component.scss']
})
export class ToDoListAddComponent {
  newTodo: ToDoList = {
    id: 0,
    name: '',
    imageCoverUrl: '',
  };

  constructor(private toDoListService: ToDoListService) { }

  onSubmit() {
    this.toDoListService.addTodoList(this.newTodo).subscribe(
      response => {
        alert("success");
      },
      error => {
        alert("error");
        console.log(error);
      }
    );
  }
}
