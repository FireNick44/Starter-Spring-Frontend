import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ToDoListService } from '../../service/ToDoList/to-do-list.service';
import { ToDoList } from '../../models/to-do-list.model';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  toDoLists: ToDoList[] = [];

  constructor(
    private router: Router,
    private toDoListService: ToDoListService
  ) {}

  ngOnInit(): void {
    this.fetchToDoLists();
  }

  fetchToDoLists(): void {
    this.toDoListService.getAllToDoLists().subscribe((toDoLists) => {
      this.toDoLists = toDoLists;
    });
  }

  deleteToDoList(id: number): void {
    if (confirm('Are you sure you want to delete this To-Do List?')) {
      this.toDoListService.deleteTodoList(id).subscribe(() => {
        this.fetchToDoLists();
      });
    }
  }
}
